FROM node:latest

WORKDIR /src

COPY ./package.json /src/package.json 

RUN npm install

COPY ./src/ /src/src

COPY ./public/ /src/public

COPY ./vite.config.ts /src

COPY ./index.html /src

EXPOSE 3001 8080 

CMD npm run dev 
