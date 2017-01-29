FROM node

WORKDIR /var/app

COPY . /var/app

RUN npm install --production

EXPOSE 3000

ENV NODE_ENV=production

CMD ["./env/initialize.prod.sh"]
