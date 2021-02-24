const connection = require('./connection')

function getReviews (db = connection) {
  return db('reviews').select()
}

module.exports = {
  getReviews
}
