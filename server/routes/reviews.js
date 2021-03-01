// const routes = ('authenticare/server/routes')
const express = require('express')

const db = require('../db/reviews')

const router = express.Router()

const multer = require('multer')
const multerS3 = require('multer-s3')
const AWS = require('aws-sdk')

// Amazon s3 config
const s3 = new AWS.S3()
AWS.config.update(
  {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID
  }
)
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'glasshomes',
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, 'images/' + file.originalname)
    }
  })
})

router.post('/image', upload.single('img'), function (req, res, next) {
  res.send(req.file.location)
})

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

router.get ('/property/:id', (req, res) =>{
  propertyId = req.params.id
  console.log(req.params.id)
  db.getReviewByPropertyId(propertyId)
  .then(id => {
    res.json (id)
    })
  })

  router.get('reviews/property/:offset/:limit', (req, res) => {
    let offset = req.params.offset
    let limit = req.params.limit
    db.getReviewsWithLimitAndOffset(limit, offset)
    .then(reviewsPage => {
      res.json(reviewsPage)
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
    start_of_tenancy: req.body.start_of_tenancy,
    end_of_tenancy: req.body.end_of_tenancy,
    property_ID: req.body.propsId,
    img: req.body.image
  }
  
  db.addReview(review)
  .then(review => {
    res.json({ review: review })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Post review broken' })
  })
})

router.delete('/:id', (req, res) =>{
  const id = req.params.id
  db.deleteReview(id)
  .then(()=>{
    res.sendStatus(200)
  })
})


router.patch('/:id',(req,res) => {
  const id = req.params.id
  const review = req.body
  // console.log(req.body)
  db.updateReview(id, review)
  .then(() => {
    res.sendStatus(200)
  })
  .catch(err => {
      console.log(err)
      res.status(500).json({message: "update review broken."})
    })
})




module.exports = router
