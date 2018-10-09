# Wilcuma - OSM Welcomer API

💡
An idea from the [OSMUS Spring Hackathon](https://www.openstreetmap.us/2018/04/announcing-osmus-spring-hackathon/) to build tasking workflow around volunteer "welcomers" who send messages through OSM's messaging system. This tool would tell give them a list of new signups in their area either location or interest (based on hashtags).

🗓
This project is just the very early beginnings of a backend, with tools to injest the dataset from the Slackbot into a database with an API on top.

## Key Points

- Welcomers would manually message users through OSM (this is just a tasking tool, not something automated 😇)
- Lots still to figure out 🧠⛈⏰

## TODO

- [ ] Finish Authentication Setup 🔒
- [ ] Finalize API and Documentation 📃
- [ ] Entire frontend application 😬🏋🏻‍
- [ ] authorization/admins/moderation 👩‍💼👨‍💼

## Notes

This is a Node + Express app with a GraphQL server wired to a PostgreSQL database

## Development

### Initialize the database

Uses Docker and Docker Compose

```bash
docker volume create --name=wilcuma-db-data
docker-compose up -d db
./run-knex.sh migrate:latest
```

### Run locally

```bash
yarn install
cp .dev.env .env
yarn run dev
```

### Add data

Loads the latest data from the Slackbot

```bash
node ./src/update-signups.js
```

### Run with Docker

```bash
docker-compose up
```

### Trying it out

Go to `http://localhost:4010/api` and enter a GraphQL query like

```graphql
query {
  signups {
    id
    name
    changeset
  }
}
```