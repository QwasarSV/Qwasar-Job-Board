from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import tempfile
import uuid
import os
import shutil
import json

def scrape():
    options = Options()
    options.add_argument("--headless=new")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    user_data_dir = os.path.join("/tmp", f"user_data_{uuid.uuid4()}")
    options.add_argument(f"--user-data-dir={user_data_dir}")
    options.binary_location = "/usr/bin/chromium"
    service = Service("/usr/bin/chromedriver")

    try:
        with webdriver.Chrome(service=service, options=options) as driver:
            url = "http://quotes.toscrape.com"
            driver.get(url)
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, "quote"))
            )
            soup = BeautifulSoup(driver.page_source, "html.parser")

        results = []
        for quote_block in soup.find_all("div", class_="quote"):
            text = quote_block.find("span", class_="text").get_text(strip=True)
            author = quote_block.find("small", class_="author").get_text(strip=True)
            tags = [tag.get_text(strip=True) for tag in quote_block.find_all("a", class_="tag")]
            results.append({
                "text": text,
                "author": author,
                "tags": tags
            })

    finally:
        shutil.rmtree(user_data_dir, ignore_errors=True)

    return results

if __name__ == "__main__":
    results = scrape()
    for item in results:
        print(json.dumps(item))
