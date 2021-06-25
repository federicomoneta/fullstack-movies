# syntax=docker/dockerfile:1

FROM node:14
ENV NODE_ENV=production

COPY  . /
WORKDIR ./app

RUN npm install
RUN npm install mysql

COPY . .

RUN apt-get update && apt-get install -y netcat

COPY wait.sh /wait.sh
RUN chmod +x /wait.sh

