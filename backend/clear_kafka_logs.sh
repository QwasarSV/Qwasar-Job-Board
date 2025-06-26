#!/bin/bash

read -p "Did you remember to stop the docker containers? (y/n) " choice
choice=$(echo "$choice" | tr '[:upper:]' '[:lower:]')
if [[ "$choice" != "y" ]]; then
  echo "Please run ./docker_stop_and_clean.sh and try again."
  exit 1
fi
rm -rf ./data/kafka1/data ./data/kafka2/data ./data/kafka3/data
echo "" > scraper_orchestrator/scraper_errors.txt
echo "" > scraper_orchestrator/publisher_service.txt
echo "" > consumer_service/consumer_service.txt
echo "" > consumer_service/consumer_db_errors.txt
echo "" > consumer_service/consumer_errors.txt
