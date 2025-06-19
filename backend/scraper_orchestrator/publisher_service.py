import json
import socket
import time
import logging
from confluent_kafka import Producer
from concurrent.futures import ThreadPoolExecutor
from scrapers import ibm_scraper


class Publisher:
    MAX_KAFKA_MSG_SIZE = 1000000  # Set just below the 1 MB safe limit

    def __init__(self):
        self.csv_scrapers = [ibm_scraper]
        self.conf = {
            'acks': 'all',
            'bootstrap.servers': 'kafka1:19091',
            'client.id': socket.gethostname(),
            'message.max.bytes': self.MAX_KAFKA_MSG_SIZE
        }
        self.producer = Producer(self.conf)
        self.topic = "sql_queue"

    def split_json_message(self, json_data, max_size):
        if isinstance(json_data, str):
            data = json.loads(json_data)
        else:
            data = json_data
        if not isinstance(data, list):
            data = [data]

        chunks = []
        current_chunk = []

        for item in data:
            current_chunk.append(item)
            test_chunk = json.dumps(current_chunk)

            if len(test_chunk.encode('utf-8')) > max_size:
                current_chunk.pop()
                chunks.append(json.dumps(current_chunk))
                current_chunk = [item]

        if current_chunk:
            chunks.append(json.dumps(current_chunk))

        return chunks

    def delivery_report(self, err, msg):
        if err is not None:
            logging.error(f"FAILED DELIVERY: {err}")
        else:
            decoded_value = msg.value().decode('utf-8')
            logging.info(
                f"Produced event to topic {msg.topic()}: partition={msg.partition()}, value={decoded_value}"
            )

    def run_scraper(self, scraper_module):
        #TODO-implement threading.local() for thread-specific local "global variable" storage
        # that will act as a buffer for potential left over chunks
        # between functional calls for "my_readline-style" edge case
         
        scraper_name = scraper_module.__name__
        logging.info(f"Running scraper: {scraper_name}")

        try:
            raw_results = scraper_module.scrape()
            chunks = self.split_json_message(raw_results, self.MAX_KAFKA_MSG_SIZE)

            for chunk in chunks:
                self.producer.produce(
                    topic=self.topic,
                    value=chunk.encode("utf-8"),
                    callback=self.delivery_report
                )
                self.producer.poll(0)

        except Exception as e:
            logging.exception(f"Error running scraper {scraper_name}: {e}")

    def run_all_scrapers(self):
        with ThreadPoolExecutor(max_workers=10) as executor:
            executor.map(self.run_scraper, self.csv_scrapers)
        #flush 1st!!
        self.producer.flush()
        # Send 'done' message
        self.producer.produce(
            topic=self.topic,
            value=json.dumps({"type": "done"}).encode("utf-8"),
            callback=self.delivery_report
        )
        
        logging.info("All scrapers finished.")


if __name__ == "__main__":
    publisher = Publisher()
    publisher.run_all_scrapers()
