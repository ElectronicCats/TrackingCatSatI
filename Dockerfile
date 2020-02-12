FROM node:13.5.0

COPY [".", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

EXPOSE 35829

RUN npm start
