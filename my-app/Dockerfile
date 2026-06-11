FROM node:18
#FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

#CMD ["npx", "nodemon", "dynamicapp.js"]
CMD ["npx", "nodemon", "mongoapp.js"]

