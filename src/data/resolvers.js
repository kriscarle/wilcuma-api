// @flow
import GraphQLJSON from 'graphql-type-json'
import Promise from 'bluebird'
import Signup from '../models/signup'

const resolvers = {
  Query: {
    signups () {
      return Signup.all()
    },
    async signup (_:any, args: Object) {
      return Signup.findById(args.id)
    },
    async signupsByHashTag (_:any, args: Object) {
      if (!args.code) throw new Error('missing country code')
      return Signup.findByHashTag(args.tag)
    },
    async signupsByCountryCode (_:any, args: Object) {
      if (!args.code) throw new Error('missing country code')
      return Signup.findByCountryCode(args.code)
    }
  },
  JSON: GraphQLJSON,
  Mutation: {
    startAWelcome (
      root: any,
      {userId}: {userId: number}
    ) {
      
    },

    completeAWelcome (
      root: any,
      {userId}: {userId: number}
    ) {
      
    }
  }
}

export default resolvers
