import { gql } from 'apollo-server-express'
import resolvers from './resolvers'

const typeDefs = gql`
scalar JSON

type Hashtag {
 hashtag: String
}

type Welcome {
  id: ID!
  userId: ID!
  welcomingUserID: Int
  lockTime: String
  sentTime: String
  status: String
}

type Signup {
  id: ID!
  name: String!
  inside: JSON
  changeset: JSON
  geometry: JSON
  hashtags: [Hashtag]
  welcome: Welcome
}

type Query {
  signups: [Signup]
  signupsByCountryCode(code: String): [Signup]
  signupsByHashTag(tag: String): [Signup]
  signup(userId: String): Signup
  welcomes(welcomingUserID: String): [Welcome]
}

type Mutation {
  startAWelcome(id: Int): Welcome
  completeAWelcome(id: Int): Welcome
}

`

export default { typeDefs, resolvers }
