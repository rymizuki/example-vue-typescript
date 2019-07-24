FROM node:12.4.0
WORKDIR /usr/local/docker/app
COPY ./ /usr/local/docker/app
RUN npm ci

CMD ["npm", "run", "watch"]

EXPOSE 8000