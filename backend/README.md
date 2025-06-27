# File Structure

Confluent_Version/
├── docker-compose.yml
├── scraper_orchestrator/
│   ├── Dockerfile
│   ├── publisher_service.py
│   ├── scrapers/
│   │   └── site1_scraper.py
│   └── requirements.txt
├── consumer_service/
│   ├── Dockerfile
│   ├── consumer_main.py
|    ├── consumer_service.py
│   └── requirements.txt
├── frontend/
│   ├── Dockerfile
│   ├── templates/
│   │   └── index.html
│   ├── app.py
│   ├── models.py
│   └── requirements.txt
├── models/
│   ├── __init__.py >>> I believe is needed to access this "package" in python(?)
│   ├── models.py
└── .env >>> temporarily on local machine until we have a secrets manager

NOTE TO GABE: This is a toy app version of our dataflow using a quotes scraper. As of now the Kafka Containers and KAFDROP visualizer (for entering the topic names non-programatically) are up and running when spun up with Docker. The SQL DB container is up and running. I believe working as well. The consumer_service, scraper_orchestrator and frontend containers are not working correctly.

The main sticking point for the consumer_service and scraper_orchestrator containers according to the logs seems to be the models.py. They need to be used by both the consumer_service for the ORM into the database and the frontend/app.py for mapping to the frontend. It seemed like the solution was to have the models in isolation and have a shared "address space" at app/. 


# Execution

Build and start services:

```bash
$ docker-compose up --build
```

Access the frontend:

Navigate to http://localhost:5000 to view the scraped quotes.