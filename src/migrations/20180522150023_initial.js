
exports.up = (knex, Promise) => {
  return Promise.mapSeries([

    knex.raw(`
    CREATE TABLE welcomes (
      id text PRIMARY KEY,
      welcoming_user_id bigint,
      lock_time timestamp without time zone,
      sent_time timestamp without time zone,
      status text
    )
  `),

    knex.raw(`
      CREATE TABLE signups (
        id bigint PRIMARY KEY,
        name text,
        inside jsonb,
        changeset jsonb,
        geometry jsonb,
        welcome text,
        CONSTRAINT signups_welcome FOREIGN KEY (welcome) REFERENCES welcomes (id)
      )
    `),

  knex.raw(`
    CREATE TABLE hashtags (
      hashtag text PRIMARY KEY
    )
  `),

  knex.raw(`
    CREATE TABLE signup_hashtags (
      user_id bigint,
      hashtag text,
      PRIMARY KEY (user_id, hashtag),
      CONSTRAINT signup_hashtags_user_id FOREIGN KEY (user_id) REFERENCES signups (id),
      CONSTRAINT signup_hashtags_hashtags FOREIGN KEY (hashtag) REFERENCES hashtags (hashtag)
    )
  `)
  ], (command) => {
    return command
  })
}

exports.down = (knex, Promise) => {
  return Promise.mapSeries([
    knex.raw(`DROP TABLE signup_hashtags`),
    knex.raw(`DROP TABLE hashtags`),
    knex.raw(`DROP TABLE signups`),
    knex.raw(`DROP TABLE welcomes`)
  ], (command) => {
    return command
  })
}
