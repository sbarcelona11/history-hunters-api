FROM node:14.21.3-alpine
## update
RUN apk update
RUN apk add --no-cache ca-certificates && \
    update-ca-certificates
# Install sqlite
RUN apk update && \
    apk add --no-cache sqlite
# Install sequelize-cli
RUN npm install -g sequelize-cli
RUN npm install -g sequelize
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .
# Run the app
EXPOSE 4000
# Run the app
CMD ["npm", "start"]
