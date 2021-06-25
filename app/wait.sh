#!/bin/sh

while ! nc -z db 6603 ; do
    echo "Waiting for the MySQL Server"
    sleep 3
done

node index.js