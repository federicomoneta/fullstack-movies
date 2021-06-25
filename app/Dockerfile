# syntax=docker/dockerfile:1

# Base
FROM node:14 AS Base
ENV NODE_ENV=production
COPY . /app
WORKDIR /app
RUN npm install

# Dependencias
FROM Base AS Dependencias
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production
RUN cp -R node_modules prod_node_modules
RUN npm install

# Release
FROM Base AS Release
COPY --from=Dependencias /root/app/prod_node_modules ./node_modules
COPY . .
EXPOSE 3001
CMD [ "node", "index.js" ]