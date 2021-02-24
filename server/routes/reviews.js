const routes = require('authenticare/server/routes')
const express = require('express')

const db = require('../db/reviews')

const router = express.Router()

router.get('/', (req, res) => {
  db.getReviews()
    .then(results => {
      res.json({ reviews: results.map(review => review) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.get ('/:id', (req, res) =>{
  reviewId = req.params.id
  db.getReviewById(reviewId)
  .then(id => {
    res.json (id)
    })
  })

router.post('/', (req,res) => {
  const review = {
    title: req.body.title,
    comments: req.body.comments,
    pros: req.body.pros,
    cons: req.body.cons,
    rating: req.body.rating,
    year_of_tenancy: req.body.year_of_tenancy
  }
  console.log(req.body)
  db.addReview(review)
  .then(review => {
    res.json({ review: review })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Post review broken' })
  })
})

module.exports = router
