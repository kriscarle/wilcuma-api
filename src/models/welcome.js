// @flow
const knex = require('../connection')
const shortid = require('shortid')

const TABLE = 'welcomes'

module.exports = {
  async all () {
    return knex(TABLE).select()
  },

  async findByID (id: number) {
    const result = await knex(TABLE).select().where({ id })
    if (result && result[0]) {
      return result
    }
    return null
  },

  add (userId: number, welcomingUserId: number, status: string) {
    const welcomeID = shortid.generate()
    return knex(TABLE).insert({
      id: welcomeID,
      user_id: userId,
      welcoming_user_id: welcomingUserId
    })
  }
}
