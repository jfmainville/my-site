ARG NODE_VERSION=20.17.0-alpine
FROM node:${NODE_VERSION}

WORKDIR /app
COPY . .
RUN apk --update add postgresql-client
RUN npm install --silent
RUN npm run build
RUN chmod +x entrypoint.sh

EXPOSE 3000

CMD ["./entrypoint.sh"]
