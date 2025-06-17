from models.models import Job
from confluent_kafka import Consumer
import time
import json
from sqlalchemy.exc import SQLAlchemyError

def run_consumer():
    session_factory = Job.build_engine()  # returns sessionmaker

    dbq_config = {
        'bootstrap.servers': 'kafka1:19091',
        'group.id': 'sql-group',
        'client.id': 'sql-db-consumer-1',
        'enable.auto.commit': True,
        'session.timeout.ms': 6000,
        'auto.offset.reset': 'earliest'
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
                with open("consumer_errors.log", "a") as error_log:
                    error_log.write(error_message)
                continue

            # Valid message
            value = msg.value().decode('utf-8')
            data = json.loads(value)

            if data.get("type") == "done":
                print("✅ Done message received. Shutting down consumer.")
                break
            else:
                try:
                    # Use the session factory directly!
                    with session_factory() as session:
                        job = Job(
                            text=data['text'],
                            author=data['author'],
                            tags=",".join(data['tags'])
                        )
                        session.add(job)
                        session.commit()
                        print(f"✅ Consumed and inserted event: {data}")
                
                except SQLAlchemyError as e:
                    error_message = f"{time.ctime()}: ❌ Database error: {e}\n"
                    print(error_message)
                    with open("consumer_db_errors.log", "a") as error_log:
                        error_log.write(error_message)

    except KeyboardInterrupt:
        pass
    finally:
        db_consumer.close()
        print("Consumer shutdown successfully")

if __name__ == "__main__":
    run_consumer()
