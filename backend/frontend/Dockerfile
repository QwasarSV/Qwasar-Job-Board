# Use official Python runtime image
FROM python:3.11-slim

# Set working directory in container
WORKDIR /app/frontend

#Add dependancies for db interaction
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs \
    apt-get install -y --no-install-recommends \
    default-libmysqlclient-dev \
    gcc \
    libmariadb-dev-compat \
    libmariadb-dev \
    pkg-config \  
    && apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy the models into the container
COPY models /app/frontend/models

# Copy the frontend app code
COPY frontend/ /app/frontend

# Copy requirements.txt into the container
COPY frontend/requirements.txt . 

# Install dependencies
RUN ls -l /app
RUN pip install --no-cache-dir -r requirements.txt


# Expose port 6300
EXPOSE 6300

# Run the Flask app
CMD ["python3", "app.py"]
