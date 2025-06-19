import schedule
import time
from publisher_service import run_publisher

# Schedule it
schedule.every().day.at("00:00").do(run_publisher)

if __name__ == "__main__":
    while True:
        schedule.run_pending()
        time.sleep(60)

