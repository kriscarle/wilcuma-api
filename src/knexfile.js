// Update with your config settings.
const config = require('./config')

module.exports = {

  development: {
    client: 'pg',
    connection: config.connection.url,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds/dev'
    }
  },

  staging: {
    client: 'pg',
    connection: config.connection.url,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds/staging'
    }
  },

  production: {
    client: 'pg',
    connection: config.connection.url,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds/production'
    }
  }
}
