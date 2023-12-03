FROM node:18

# create app drc
WORKDIR /usr/src/app

COPY package*.json yarn.lcok

RUN yarn install

# bundle app source
COPY . .

EXPOSE 8000

# run the app
CMD ["yarn", "start"]