# Qwasar-Job-Board

An enterprise-grade, scalable job posting aggregation platform that collects, processes, and presents job opportunities from multiple sources with intelligent ranking and filtering capabilities.

##  Overview

Qwasar-Job-Board is a full-stack web application that uses microservices to:
- Scrape job data from multiple external sources (e.g., LinkedIn, Indeed)
- Process, validate, and normalize the data
- Present an interactive job dashboard with advanced filtering and search
- Operate under scalable, secure, and compliant architecture

---

##  Key Features

-  Distributed web scraping via Python microservices
-  Real-time data processing pipeline with Kafka
-  Intelligent filtering and search functionality
-  Interactive frontend dashboard using React
-  Robust API Gateway for secure public access
-  CI/CD pipeline for continuous integration and deployment
-  Anti-bot detection and scraping countermeasures

---

##  Tech Stack

### Frontend
- HTML, CSS, JavaScript
- React.js (Next.js)

### Backend
- Node.js + Express (API Gateway)
- Python (Scraping & Data Processing Microservices)
- PostgreSQL / MySQL (Relational DB)
- MongoDB (Flexible data layer)
- Kafka (Data streaming)
- Docker (Microservice containers)
- Kubernetes (Deployment and scaling)

---

##  Microservices Overview

### 1. Web Scraping Service
- **Language**: Python
- **Libraries**: BeautifulSoup, Selenium, nodriver
- **Scheduling**: Cron jobs
- **Deployment**: Dockerized microservice

### 2. Data Processing Service
- **Purpose**: Clean, validate, and normalize data
- **Libraries**: Pandas, custom validators
- **API**: RESTful interface

### 3. Database Service
- **Purpose**: Persistent job storage
- **DB Engines**: PostgreSQL or MySQL
- **Schema**: JSON Schema for validation

### 4. API Gateway
- **Stack**: Node.js + Express (or FastAPI)
- **Features**: Routing, validation, rate-limiting, authentication

### 5. Frontend UI
- **Stack**: Next.js, React
- **Features**: Real-time dashboards, filters, search

---

## 📈 System Architecture (Data Flow)

```text
[ Scraper Service ]
       ↓
[ CSV Validator ]
       ↓
[ Kafka Messaging Queue ]
       ↓
[ Data Processor ]
       ↓
[ PostgreSQL/MySQL ]
       ↓
[ API Gateway ]
       ↓
[ Frontend Dashboard ]
```

---

## Security & Compliance
- PII Encryption
- API Rate Limiting
- Role-based Access Control
- Input Sanitization
- CAPTCHA Bypass Strategies (ethical)
- robots.txt and Terms of Service compliant

---

## Database Schema (PostgreSQL)

*Coming soon: Detailed schema diagrams and table definitions.*

---

## REST API Endpoints

### `/api/v1/jobs`
- **GET**: Paginated job listings
- **POST**: Create new job posting (internal use)

### `/api/v1/jobs/{id}`
- **GET**: Specific job detail
- **PUT**: Update job
- **DELETE**: Delete job

### `/api/v1/categories`
- **GET**: List job categories

### `/api/v1/search`
- **POST**: Advanced job search with filters

---

## Testing & Quality
- Unit Tests: pytest
- Coverage: pytest-cov (min 80%)
- E2E: selenium
- Load Tests: locust
- CI/CD: GitHub Actions + Docker + Kubernetes

---

## Performance Standards
- API response time < 200ms
- WCAG 2.1 AA accessibility
- 80%+ code coverage
- Zero high/critical vulnerabilities

---

## Installation & Setup

### Requirements
- Node.js, Python 3, Docker, MongoDB, PostgreSQL

---

# Legacy Documentation

Welcome to Qwasar's Job Board!
-This is a Job Search Platform that acts to aggregate job listings from numerous companies and government organizations using scraping and API calls. It is being built with Python, Flask, Kafka, MySQL, Selenium, Docker and other technologies.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this website locally, follow these steps:

- Clone the repository:

    using sh:
    ```sh
    git clone git@github.com:QwasarSV/Qwasar-Job-Board.git
    ```

    using https:
    ```sh
    git clone https://github.com/QwasarSV/Qwasar-Job-Board.git
    ```

2. Navigate to the project directory:
    ```sh
    cd Qwasar-Job-Board/backend
    ```

3. Build and start services:

    ```bash
    $ docker-compose up --build
    ```

4. Open `localhost:6300` in your preferred web browser

5. Enjoy!

## Usage

This webpage is designed to help assist job seekers find positions that better suite their skills and interests.

## Features

# Microservices Architecture
![alt text for screen readers](/Job_Board_Architecture.jpg "The Job Searcher Architecture")

## Technologies Used
- **Python** 
- **Flask**  
- **Selenium**
- **Beautifulsoup** 
- **Kafka** 
- **MySQL** 

- **Caddy** 
- **Hashicorp Vault** 
- **Hashicorp Consul** 

Access the frontend:

Navigate to http://localhost:6300 to view the scraped information.

## Future Improvements
- Build out Model Context Protocol Server, Prompting, Tools and Resources
- Refine the job search functionality using prompting and MCP
- Create an automated resume editor using MCP 


## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

Copyright <YEAR> <COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.





