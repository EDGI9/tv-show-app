FROM node:24-bookworm

WORKDIR /app

# Install Git using apk
RUN apk add --no-cache git

COPY . .

RUN npm ci

EXPOSE 5173

CMD [ "npm", "run", "dev" ]