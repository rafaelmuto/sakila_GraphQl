FROM node:16
RUN mkdir -p /sakila_graphQl
WORKDIR /sakila_graphQl

COPY . /sakila_graphQl

RUN npm install

RUN npm i -g @adonisjs/cli