FROM node:26-alpine
WORKDIR /app
#install dependencies and packages
COPY package*.json ./
RUN npm ci

#copy source code
COPY . .
EXPOSE 5173

CMD ["npm","run","dev", "--","--host", "0.0.0.0"]