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
    console.log('grants created')
    return creator.create(notifyStore.types.GRANTS,
      require('./src/data/grants'))
  })
  .then(() => {
    console.log('states created')
    return creator.create(notifyStore.types.STATES,
      require('./src/data/states'))
  })
  .then(() => {
    console.log('users child created')
    return creator.create(notifyStore.types.USERS,
      require('./src/data/users-0'))
  })
  .then(() => {
    console.log('users parent created')
    return creator.create(notifyStore.types.USERS,
      require('./src/data/users-1'))
  })
  .then(() => {
    console.log('users admin created')
    return creator.create(notifyStore.types.USERS,
      require('./src/data/users-2'))
  })
  .then(() => {
    console.log('rooms created')
    return creator.create(notifyStore.types.ROOMS,
      require('./src/data/rooms'))
  })
  .then(() => {
    console.log('messages created')
    return creator.create(notifyStore.types.MESSAGES,
      require('./src/data/messages'))
  })
  .then(() => {
    console.log('tokens created')
    return creator.create(notifyStore.types.TOKENS,
      require('./src/data/tokens'))
  })
  .then(() => {
    console.log('ready.')
  })
  .catch((err) => {
    console.error('error:', err)
  })
