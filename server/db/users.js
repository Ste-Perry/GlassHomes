const connection = require('./connection')

function getUsers (db = connection) {
  return db('users').select()
}

function addUsers (user, db = connection) {
  return db('users')
  .insert(user, 'id')
  .then(ids => ids[0])
}

module.exports = {
  getUsers,
  addUsers
}
