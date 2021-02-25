const connection = require('./connection')

function getProperties (db = connection) {
  return db('properties').select()
}

function addProperty (property, db = connection) {
  return db('properties')
  .insert(property)
  .then(ids => ids[0])
}

function getPropertyById (id, db = connection) {
  return db('properties')
  .where('id',id)
  .first()
}
function getPropertyByAddress (address, db = connection) {
  return db('properties')
  .where('address',address)
  .first()
}



module.exports = {
  getProperties,
  addProperty,
  getPropertyById,
  getPropertyByAddress
}
