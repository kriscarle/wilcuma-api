FROM mhart/alpine-node:10 as builder
WORKDIR /app
RUN apk update && \
    apk add --no-cache git
COPY package.json yarn.lock /app/
RUN yarn install  --production --pure-lockfile
COPY . .

# Bundle app source
FROM mhart/alpine-node:base-10
WORKDIR /app
COPY --from=builder /app .
RUN chmod +x /app/docker-entrypoint.sh
VOLUME ["/app/logs"]
EXPOSE 4005
CMD /app/docker-entrypoint.sh