FROM node:16.15.0

WORKDIR /usr/app

COPY . ./

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start:docker" ]