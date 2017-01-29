FROM node

WORKDIR /var/app

COPY . /var/app

RUN npm install --production

RUN npm install typings -g

RUN typings install

EXPOSE 3000

ENV NODE_ENV=production

CMD npm start
