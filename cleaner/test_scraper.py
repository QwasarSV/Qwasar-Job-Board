#!/usr/bin/env python
# coding: utf-8

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import pandas as pd
from selenium.webdriver.common.keys import Keys
import time
from selenium.common.exceptions import NoSuchAttributeException
import json


def gopher_broke(driver: webdriver.Chrome, url: str, query: str, location: str):
    try:
        driver.get(url)
        
        time.sleep(2)
        
        keyword_input = driver.find_element(By.ID, "typeaheadInput")
        keyword_input.clear()
        keyword_input.send_keys(query)
        
        location_input = driver.find_element(By.ID, "google-location-search")
        location_input.clear()
        location_input.send_keys(location)
        
        location_input.send_keys(Keys.RETURN)
        
        time.sleep(5)
        
        
        data = BeautifulSoup(driver.page_source, 'html.parser')
        driver.quit()
        
        desc = data.find('div', class_="m-px mx-auto max-w-screen-2xl sm:px-6")
        jobs = desc.div.find_all('div')
        info = desc.div.find_all('div', class_='content')
        head = desc.div.find_all('div', class_='header')
        links:list = []
        descriptions:list = []
        companies:list = []
        job_types:list = []
        salaries:list = []
        easy_apply:list = []
        for listing in jobs:
            if listing.find('div') is None:
                continue
            job_card = listing.find('div')
            if job_card.a is None:
                continue
            links.append(listing.div.a['href'])
        for item in info:
            descriptions.append(item.find('p', class_='line-clamp-2 h-10 shrink grow basis-0 text-sm font-normal text-zinc-900').text)
            job_type_and_salary = item.find_all('p', class_='m-0 flex h-full w-full items-center justify-center overflow-hidden text-ellipsis text-xs font-medium text-zinc-600')
            
            if len(job_type_and_salary) == 2:
                easy_apply.append(job_type_and_salary[0].text.lower() == 'easy apply')
                job_types.append(job_type_and_salary[0])
                salaries.append(job_type_and_salary[1])
                continue
            if len(job_type_and_salary) == 3:
                easy_apply.append(job_type_and_salary[0].text.lower() == 'easy apply')
                job_types.append(job_type_and_salary[1])
                salaries.append(job_type_and_salary[2])
                continue
            easy_apply.append(job_type_and_salary[0].text.lower() == 'easy apply')
            job_types.append(job_type_and_salary[0])
            salaries.append('Not Provided')
        for company in head:
            companies.append(company.span.text)
        return {'company': companies, 'links' : links, 'description' : descriptions, 'job_type' : job_types, 'salary' : salaries, 'easy_apply' : easy_apply}
    except NoSuchAttributeException as nsae:
        print(nsae)
        return None


if __name__ == "__main__":
    new_driver = webdriver.Chrome()
    data = gopher_broke(driver=new_driver, url='https://www.dice.com', query='data scientist', location='orlando, fl')
    
    if data is not None:
        data_chunks = [set(data['links'][idx:idx + 4]) for idx in range(0, len(data['links']), 4)]
        data['links'] = data_chunks
        df = pd.DataFrame(data)
        print(df)




