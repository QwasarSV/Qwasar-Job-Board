import schedule
import time
from consumer_service import run_consumer

# Schedule it
schedule.every().day.at("00:00").do(run_consumer)

if __name__ == "__main__":
    while True:
        schedule.run_pending()
        time.sleep(60)
