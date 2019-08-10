require('@babel/register')
var request = require('superagent')
var Signup = require('./models/signup')
var Promise = require('bluebird')

var update = async () => {
  var data = await request.get('https://s3.amazonaws.com/data.openstreetmap.us/users/newest.json')
    .set('Accept', 'application/json')
    .then(res => res.body)

  await Promise.map(data.features, async (feature) => {
    var previousEntry = await Signup.findByID(feature.properties.user.id)
    if (previousEntry) {
      console.log('Already exists: ' + feature.properties.user.name)
      return true
    } else {
      console.log('Added user: ' + feature.properties.user.name)
      return Signup.add(feature)
    }
  })
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit()
}
update()
