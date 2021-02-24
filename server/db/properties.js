const connection = require('./connection')

function getProperties (db = connection) {
  return db('properties').select()
}

module.exports = {
  getProperties
}
