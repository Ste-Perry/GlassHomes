const connection = require('./connection')

function getReviews (db = connection) {
  return db('reviews').select()
}

function addReview (reviews, db = connection) {
  return db('reviews')
  .insert(reviews)
  .then(ids => ids[0])
}
function getReviewById (id, db = connection) {
  return db('reviews')
  .where('id',id)
  .first()
}
module.exports = {
  getReviews,
  addReview,
  getReviewById
}
