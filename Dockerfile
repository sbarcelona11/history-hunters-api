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
#ENV PATH /usr/src/app/node_modules/.bin:$PATH
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
CMD ["npm", "start"]
