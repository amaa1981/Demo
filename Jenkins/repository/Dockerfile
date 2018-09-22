FROM node:8-alpine
WORKDIR /home
COPY package*.json ./
RUN npm install
COPY src ./src
EXPOSE 3000

CMD ["npm", "start"]