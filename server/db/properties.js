const connection = require('./connection')



function getProperties (db = connection) {
  return db('properties').select()
}

function getPropertiesWithLimitForAdmin (limit, offset, db = connection) {
  return db('properties').select().limit(limit).offset(offset)
}


// function getPropertiesWithRatings (sort, db = connection) {

//   return db('properties').leftOuterJoin('reviews', 'reviews.property_ID', 'properties.id').groupBy('reviews.property_ID').select('properties.*', db.raw('AVG(reviews.rating) AS score')).orderBy(db.raw('AVG(reviews.rating)'), sort).then(properties => { 
//     console.log(properties)
//     console.log(properties.length)
//     return properties
//   })
// }

function getPropertiesWithRatings (sort, db = connection) {

  return db('properties').leftOuterJoin('reviews', 'reviews.property_ID', 'properties.id').groupBy('properties.id').select('properties.*', db.raw('AVG(reviews.rating) AS score')).orderBy(db.raw('AVG(reviews.rating)'), sort)
  //It works
  
  
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

function getPropertysAvgScore (avg_score, db = connection) {
  return db('properties')
  .where('avg_score', avg_score)
  .select()
}


module.exports = {
  getProperties,
  getPropertiesWithRatings,
  addProperty,
  getPropertyById,
  deleteProperty,
  updateProperty,
  getPropertyByAddress,
  getPropertysAvgScore,
  getPropertiesWithLimitForAdmin
}
