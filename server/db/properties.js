const { connect } = require('../routes/properties')
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

function deleteProperty (id , db = connection) {
  return db('properties').delete().where('id', id )
  .then(rowCount => {
    console.log(rowCount)
    return rowCount
  })
}

function updateProperty (id, property, db = connection) {
  return db('properties').update(property).where('id', id)
  .then(rowCount => {
    console.log(rowCount)
    return rowCount
  })
}


module.exports = {
  getProperties,
  addProperty,
  getPropertyById,
  deleteProperty,
  updateProperty,
  getPropertyByAddress

}
