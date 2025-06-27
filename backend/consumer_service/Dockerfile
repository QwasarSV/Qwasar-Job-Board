FROM python:3.11-slim

WORKDIR /app/consumer_service

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        default-libmysqlclient-dev \
        gcc \
        libmariadb-dev-compat \
        libmariadb-dev \
        pkg-config && \
    apt-get clean && rm -rf /var/lib/apt/lists/*


COPY consumer_service/ /app/consumer_service
COPY models /app/consumer_service/models


RUN pip install --no-cache-dir -r requirements.txt

CMD ["python3", "consumer_service.py"]