#!/bin/sh

#run any pending database migrations
node node_modules/knex/bin/cli.js --knexfile=src/knexfile.js migrate:latest --env production

#start server
node src/server.js