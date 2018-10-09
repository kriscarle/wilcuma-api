import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'

import schema from './data/schema'
import config from './config'
import log from './services/log'

const PORT = config.INTERNAL_PORT || 4000

const app = express()
app.enable('trust proxy')
app.disable('x-powered-by')
app.use('*', cors({ origin: '*' }))

// TODO: add auth middleware

const gqlServer = new ApolloServer(schema)
gqlServer.applyMiddleware({ app, path: '/api' })

// eslint-disable-next-line no-console
app.listen(PORT, () => log.info(`GraphiQL is now running on http://localhost:${PORT}/api`))
