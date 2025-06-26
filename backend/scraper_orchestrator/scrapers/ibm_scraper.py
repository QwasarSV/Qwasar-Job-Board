#!/usr/bin/env python
# coding: utf-8

# In[2]:

import logging
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
from selenium import webdriver
import pandas as pd
from selenium.webdriver.common.keys import Keys
import time
from selenium.common.exceptions import NoSuchAttributeException
import json
import re
import random
import uuid
import os

# In[3]:
logging.basicConfig(
    filename='../scraper_orchestrator/publisher_service.txt',
    level=logging.INFO,
    format='%(asctime)s | %(levelname)s | %(message)s'
)

def scrape():
    logging.info('Gathering post URLs.')
    options = Options()
    options.add_argument("--headless=new")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    user_data_dir = os.path.join("/tmp", f"user_data_{uuid.uuid4()}")
    options.add_argument(f"--user-data-dir={user_data_dir}")
    options.binary_location = "/usr/bin/chromium"
    service = Service("/usr/bin/chromedriver")
    link_scraper = webdriver.Chrome(service=service, options=options)
    link_scraper.get("https://www.ibm.com/careers/search?field_keyword_08%5B0%5D=Consulting&field_keyword_08%5B1%5D=Enterprise%20Operations&field_keyword_08%5B2%5D=Infrastructure%20%26%20Technology&field_keyword_08%5B3%5D=Software%20Engineering&field_keyword_05%5B0%5D=United%20States")

    wait = WebDriverWait(link_scraper, 20)
    wait.until(EC.presence_of_element_located((By.CLASS_NAME, "bx--card__wrapper")))

    pages = []

    while True:
        time.sleep(random.randint(3, 6))
        
        current_url = link_scraper.current_url
        pages.append(link_scraper.page_source)

        try:
            next_button = wait.until(EC.element_to_be_clickable((By.ID, "IBMAccessibleItemComponents-next")))
            link_scraper.execute_script("arguments[0].click();", next_button)

            # Wait up to 15 seconds for URL to change
            WebDriverWait(link_scraper, 15).until(
                lambda d: d.current_url != current_url
            )

        
        except Exception as e:
            break

    link_scraper.quit()
    logging.info('Links Gathered!')

    # In[4]:


    page_source = ''.join(pages)
    soup = BeautifulSoup(page_source, 'html.parser')

    job_cards = soup.find_all('div', class_="bx--card-group__cards__col")


    # In[5]:


    jobs = {
        'title': [],
        'url' : []
    }

    for card in job_cards:
        raw_location = card.div.div.div.find('div', class_="ibm--card__copy__inner").text.strip()

        location = raw_location
        
        jobs['url'].append(card.a['href'])
        jobs['title'].append(card['aria-label'])
        


    # In[6]:


    title_and_url_df = pd.DataFrame(jobs)


    # In[7]:


    detail_scraper:webdriver = webdriver.Chrome(service=service, options=options)
    links = title_and_url_df['url'].to_list()
    pages = {}
    logging.info('Getting job detail pages')
    for link in links:
        detail_scraper.get(link)
        time.sleep(random.randint(3, 5))
        data = detail_scraper.page_source
        pages[link] = data
    detail_scraper.quit()
    logging.info('Detail pages gathered')

    # In[8]:


    posts = []
    respos = []
    logging.info('Scraping detail pages')
    for index, (url, page) in enumerate(pages.items()):
        entry = {'url' : url,
                 'description' : ''
                }
        found_something = False
        soup = BeautifulSoup(page, 'html.parser')
        job_description_area = soup.find('div', class_="article__content__view")
        job_detail_area = soup.find('article', class_="article article--sidebar")
        
        if job_description_area:
            found_something = True
            responsibilities = job_description_area
            entry['description'] = responsibilities
            respos.append(entry)
            
        if job_detail_area:
            found_something = True
            job_detail_text = job_detail_area.get_text(separator='|', strip=True)
            job_detail_text = job_detail_text.split('|')
            cleaned_list = [{job_detail_text[idx:idx + 2][0] : job_detail_text[idx:idx + 2][1]} for idx in range(0, len(job_detail_text),2)]
            posts.append({list(item.keys())[0] : list(item.values())[0] for item in cleaned_list})
            
        if found_something == True:
            continue
        else: posts.append(index)


    # In[9]:


    good_posts = [item for item in posts if not isinstance(item, int)]
    bad_posts_idx = [item for item in posts if isinstance(item, int)]
    good_postings_df = pd.DataFrame(good_posts)
    posting_details_df = pd.DataFrame(respos)
    with open('../scraper_orchestrator/scraper_errors.log', 'a') as file:
        file.write(f"The following pages (index referenced) were skipped: {bad_posts_idx}")
    logging.info(f"Scraping complete, the following pages (index referenced) were skipped: {bad_posts_idx}")
    # In[10]:


    combined_df = pd.concat([good_postings_df, posting_details_df], axis=1)


    # In[11]:

    logging.info('Formatting and cleaning data')
    combined_df['id'] = 'placeholder'
    combined_df['id'] = combined_df['id'].apply(lambda x : str(uuid.uuid4()))

    arranged_df = combined_df[['id', 'Job Title', 'Job ID', 'City / Township / Village', 'State / Province', 'Country', 'Projected Minimum Salary per year', 'Projected Maximum Salary per year' ,'Date posted', 'url', 'description', 'Area of work']]
    arranged_df = arranged_df.copy()


    # In[12]:


    arranged_df.rename(columns={
    'Job Title' : "title",
    "Job ID" : "internal_id",
    "City / Township / Village" : "location_1",
    "State / Province" : "location_2",
    "Country" : "country",
    "Projected Minimum Salary per year": "min_salary",
    "Projected Maximum Salary per year": "max_salary",
    "Date posted" : "posted_date",
    "url" : "url",
    "description" : "description",
    'Area of work' : 'job_category_id'
    }, inplace=True)


    # In[13]:


    arranged_df['location'] = arranged_df['location_1'].apply(lambda x : ''.join(x)) + ', ' + arranged_df['location_2'].apply(lambda x : ''.join(x))


    # In[14]:


    arranged_df = arranged_df.drop(['location_1', 'location_2'], axis=1)
    arranged_df[['source', 'status']] = ['Direct', 'Open']


    # In[15]:


    arranged_df['max_salary'] = arranged_df['max_salary'].map(lambda amount : float(amount.replace(',', '')))


    # In[16]:


    arranged_df['min_salary'] = arranged_df['min_salary'].map(lambda amount : float(amount.replace(',', '')))


    # In[17]:


    arranged_df['salary'] = arranged_df['min_salary'] + arranged_df['max_salary'] / 2
    arranged_df['salary'] = arranged_df['salary'].map(lambda amount : '${:,.2f}'.format(amount))


    # In[18]:


    arranged_df['location'] = arranged_df['location'].str.title()
    arranged_df = arranged_df.drop(['min_salary', 'max_salary'], axis=1)


    # In[19]:


    final_df = pd.DataFrame([{"id": '',
    "title": '',
    "location": '',
    "description": '',
    "salary": '',
    "posted_date": '',
    "source": '',
    "url": '',
    "status": '',
    "internal_id" : '',
    "company_id" : '',
    "job_category_id" : ''
    }])

    column_order = list(final_df.columns)
    arranged_df['company_id'] = 'IBM'
    arranged_df = arranged_df[column_order].fillna('Not Provided')
    arranged_df.company_id = '8127c509-6bc7-46cd-a95c-06cac602f4fd'
    arranged_df.description = arranged_df.description.map(lambda x : str(x))


    # In[21]:


    arranged_df = arranged_df.map(lambda x : str(x))


    # In[ ]:


    arranged_df.job_category_id = arranged_df.job_category_id.map(lambda x : '1' if x == 'Consulting' else ( '2' if x == 'Infrastructure & Technology' else ('3' if x == 'Software Engineering' else '4')))


    # In[62]:


    logging.info('Complete!')
    return arranged_df.to_json(orient='records')

if __name__ == '__main__':
    scrape()
