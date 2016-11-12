'use strict'

const notifyUser = require('./store')

module.exports = {
  clear (type) {
    return notifyUser.store.find(type)
      .then((resp) => {
        return resp.payload.records
      })
      .then((records) => {
        const promises = []

        records.forEach((record) => {
          promises.push(notifyUser.store.delete(type, record.id))
        })

        return Promise.all(promises)
      })
  },

  create(type, records) {
    return notifyUser.store.create(type, records)
  }
}
