ARG NODE_VERSION=24.22.3-alpine
FROM node:${NODE_VERSION}

WORKDIR /app
COPY . .
RUN npm install --silent
RUN npm run build
RUN chmod +x entrypoint.sh

EXPOSE 3000

CMD ["./entrypoint.sh"]
