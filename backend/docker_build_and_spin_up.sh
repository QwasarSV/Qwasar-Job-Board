#!/bin/bash
read -p "Did you remember to start docker? (y/n) " choice
choice=$(echo "$choice" | tr '[:upper:]' '[:lower:]')
if [[ "$choice" != "y" ]]; then
  echo "Please start docker and try again."
  exit 1
fi

export DATABASE_URL="mysql://dev:Qwasar_2025!@mysql:3306/job_hunter"
export MYSQL_ROOT_PASSWORD="Qw@$4r00+!"
export MYSQL_DATABASE="job_hunter"
export MYSQL_USER="dev"
export MYSQL_PASSWORD="Qwasar_2025!"

docker compose build; docker compose up -d
