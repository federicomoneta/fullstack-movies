# syntax=docker/dockerfile:1

# Base
FROM node:14 AS base
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./

# Dependencias
FROM base AS dependencias
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production
RUN cp -R node_modules prod_node_modules
RUN npm install

# Release
FROM base AS release
COPY --from=Dependencias ./app/prod_node_modules ./node_modules
COPY . .
EXPOSE 3001
CMD [ "node", "index.js" ]