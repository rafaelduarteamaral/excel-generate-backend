FROM node:alpine

# update packages
RUN apk update

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
# copy source code to /app/src folder
COPY . .

# check files list
RUN ls -a

RUN npm install
RUN npm knex:migrate
RUN npm run build

EXPOSE 3333

CMD [ "node", "./dist/main.js" ]