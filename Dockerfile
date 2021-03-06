FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
COPY config /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app
RUN npm run build

# TODO: not use heroku next time
ENV NODE_ENV=production
EXPOSE 8082
CMD [ "npm", "start" ]
