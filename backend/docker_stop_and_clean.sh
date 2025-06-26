#!/bin/bash

read -p "Is docker running? (y/n) " choice
choice=$(echo "$choice" | tr '[:upper:]' '[:lower:]')
if [[ "$choice" != "y" ]]; then
  echo "Please start docker and try again."
  exit 1
fi

docker compose down -v;docker builder prune -fa; docker container prune -f; docker volume prune -fa
