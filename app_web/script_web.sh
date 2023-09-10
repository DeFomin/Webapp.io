#!/bin/sh

sudo docker build -t nginx-container .

sudo docker run -d -p 8080:80 nginx-container

if sudo docker ps -q --filter "name=nginx-container"; then
    echo "Контейнер nginx-container запущен."
else
    echo "Контейнер nginx-container не запущен."
fi


echo "ID контейнера"
sudo docker ps --filter "ancestor=nginx-container"
