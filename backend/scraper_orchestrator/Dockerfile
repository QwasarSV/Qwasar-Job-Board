FROM python:3.11-slim

#Set up working directory for container
WORKDIR /app/scraper_orchestrator/

# Install dependencies for Chromium and general use
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    wget \
    unzip \
    ca-certificates \
    chromium \
    chromium-driver && \
    rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY scraper_orchestrator/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire application folder
COPY scraper_orchestrator/ /app/scraper_orchestrator/

# Set environment variables for Selenium to find Chromium and chromedriver
ENV CHROME_BIN=/usr/bin/chromium
ENV CHROMEDRIVER_BIN=/usr/bin/chromedriver

# Run your Selenium-based script
CMD ["python3", "publisher_service.py"]