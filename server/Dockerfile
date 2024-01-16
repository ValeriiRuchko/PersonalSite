FROM node:21.5.0

WORKDIR /dist

COPY ./package.json /dist/package.json 

RUN npm install

COPY . /dist

EXPOSE 3002 3000 8080 80 

CMD node --env-file=.env ./dist/server.js 
