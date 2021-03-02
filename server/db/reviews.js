

const connection = require('./connection')

function getReviews (db = connection) {
  return db('reviews').select() }

function getReviewsWithLimitAndOffset (limit, offset, id, db = connection) {
  return db('reviews').select().limit(limit).offset(offset)
  .where("property_ID", id)
}

function getReviewsWithLimitForAdmin (limit, offset, db = connection) {
  return db('reviews').select().limit(limit).offset(offset)
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

function updateReview (id, review, db = connection) {
  return db('reviews')
  .where('id', id)
  .update(review)
}
function deleteReview (id, db = connection) {
  return db('reviews')
  .where('id', id)
  .delete()
}
function getReviewByPropertyId (id, db = connection) {
  return db('reviews')
  .where('reviews.property_ID', id)
}

module.exports = {
  getReviews,
  addReview,
  getReviewById,
  updateReview,
  deleteReview,
  getReviewByPropertyId,
  getReviewsWithLimitAndOffset,
  getReviewsWithLimitForAdmin
}
