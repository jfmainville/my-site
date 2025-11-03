ARG NODE_VERSION=20.17.0-alpine
FROM node:${NODE_VERSION}

ARG NEXT_PUBLIC_AWS_BUCKET_URL

WORKDIR /app
COPY . .
RUN npm install --silent
RUN npm run build
RUN chmod +x entrypoint.sh

EXPOSE 3000

CMD ["./entrypoint.sh"]
