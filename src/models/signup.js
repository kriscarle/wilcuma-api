// @flow
const knex = require('../connection')

const TABLE = 'signups'

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

  async findByCountryCode (code: string) {
    return knex(TABLE).select().whereRaw(`(inside -> 'country_code')::text = ?`, ['"' + code + '"'])
  },

  async findByHashTag (tag: string) {
    // TODO: add hashtag search
    return
  },


  add (feature: Object) {
    // TODO: parse changeset for hashtags
    return knex(TABLE).insert({
      id: feature.properties.user.id,
      name: feature.properties.user.name,
      inside: feature.properties.inside,
      changeset: feature.properties.changeset,
      geometry: feature.geometry
    })
  }
}
