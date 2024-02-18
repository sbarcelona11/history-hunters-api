FROM node:18-alpine
RUN apk add --no-cache bash
# Create app directory
WORKDIR /usr/src/app
# Install sequelize-cli
RUN npm install -g sequelize-cli
# Install app dependencies
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .
# Build the app
#RUN npm run build
# Run the app
EXPOSE 4000
# Run the app
RUN npm run start:dev
