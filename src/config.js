require('dotenv').config()
const getenv = require('getenv')

const config = {
  connection: {
    url: `postgres://${getenv('DB_USER')}:${getenv('DB_PASS')}@${getenv('DB_HOST')}:${getenv('DB_PORT')}/${getenv('DB_DATABASE')}`
  },
  INTERNAL_PORT: getenv('INTERNAL_PORT'),
  HOSTNAME: getenv('HOSTNAME')
}

module.exports = config
