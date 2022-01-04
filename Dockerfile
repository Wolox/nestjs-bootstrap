FROM node:14.18.0-alpine

WORKDIR /usr/

COPY package.json ./
COPY package-lock.json ./
COPY .npmrc .
COPY .nvmrc .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
