'use strict'

const notifyStore = require('./src/store')
const creator = require('./src/creator')

const keys = Object.keys(notifyStore.types)

let promises = []

for (let i = 0; i < keys.length; i++) {
  const key = keys[i]
  const type = notifyStore.types[key]
  promises.push(creator.clear(type))
}

Promise.all(promises)
  .then(() => {
    return creator.create(notifyStore.types.STATES,
      require('./src/data/states'))
  })
  .then(() => {
    return creator.create(notifyStore.types.USERS,
      require('./src/data/users'))
  })
  .then(() => {
    return creator.create(notifyStore.types.ROOMS,
      require('./src/data/rooms'))
  })


