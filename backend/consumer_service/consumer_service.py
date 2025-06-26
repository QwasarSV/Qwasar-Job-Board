from models.models import Job
from confluent_kafka import Consumer
import time
import json
import uuid
from sqlalchemy.exc import SQLAlchemyError
import logging


def run_consumer():
    session_factory = Job.build_engine()  # returns sessionmaker

    dbq_config = {
        'bootstrap.servers': 'kafka1:19091',
        'group.id': f'sql-group-{uuid.uuid4()}', #will always treat as new group so newer messages make it through too
        'client.id': 'sql-db-consumer-1',
        'enable.auto.commit': True,
        'session.timeout.ms': 6000,
        'auto.offset.reset': 'earliest',
        'fetch.message.max.bytes': 1000000
    }

    db_consumer = Consumer(dbq_config)
    topic = "sql_queue"
    db_consumer.subscribe([topic])
    print(f"{time.ctime()} Consumer started.")

    try:
        while True:
            msg = db_consumer.poll(10.0)
            if msg is None:
                print("Waiting...")
                continue
            if msg.error():
                error_message = f"{time.ctime()}: ❌ Consumer error: {msg.error()}\n"
                print(error_message)
                with open("consumer_errors.txt", "a") as error_log:
                    error_log.write(error_message)
                continue

            # Valid message
            value = msg.value().decode('utf-8')
            try:
                data = json.loads(value)
            except json.JSONDecodeError as e:
                print(f"❌ JSON decode error: {e}")
                continue

            # Check for control message
            if isinstance(data, dict) and data.get("type") == "done":
                print("✅ Done message received. Shutting down consumer.")
                break

            # Normalize to list of listings
            if isinstance(data, dict):
                listings = [data]  # single job dict
            elif isinstance(data, list):
                listings = data  # list of job dicts
            else:
                print(f"⚠️ Unexpected payload type: {type(data)}")
                continue

            try:
                with session_factory() as session:
                    for listing in listings:
                        job = Job(
                            id=uuid.uuid4(),
                            title=listing['title'],
                            location=listing['location'],
                            description=listing['description'],
                            salary=listing['salary'],
                            posted_date=listing['posted_date'],
                            source=listing['source'],
                            url=listing['url'],
                            status=listing['status'],
                            internal_id=listing['internal_id'],
                            company_id=listing['company_id'],
                            job_category_id=listing['job_category_id']
                        )
                        session.add(job)
                    session.commit()
                    logging.info(f"✅ Inserted {len(listings)} job(s)")

            except SQLAlchemyError as e:
                error_message = f"{time.ctime()}: ❌ Database error: {e}\n"
                print(error_message)
                with open("consumer_db_errors.txt", "a") as error_log:
                    error_log.write(error_message)

    except KeyboardInterrupt:
        print("🛑 Consumer interrupted manually.")

    finally:
        db_consumer.close()
        logging.info("Consumer shutdown successfully")


if __name__ == "__main__":
    run_consumer()
