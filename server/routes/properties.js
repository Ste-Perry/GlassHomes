const express = require('express')

const db = require('../db/properties')

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
  db.getProperties()
    .then(results => {
      res.json({ properties: results.map(property => property) })

      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.get ('/:id', (req, res) =>{
  propertyId = req.params.id
  db.getPropertyById(propertyId)
  .then(id => {
    res.json (id)
  })
})

router.post('/', (req,res) => {
  const property = {
    suburb: req.body.suburb,
    address: req.body.address,
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    parking: req.body.parking,
    avg_score: req.body.avg_score,
    img: req.body.image
  }
  console.log(req.body.img)
  console.log(req.body)
  db.addProperty(req.body)
  .then(id => {
    res.json(id)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Post property broken' })
  })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteProperty(id)
  .then(results => {
    console.log('routes', results)
    res.json({deletedRows: results})
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'Error all pies cost $16'})
  })
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const property = req.body
  console.log(property, id)
  db.updateProperty(id, property)
  .then(results => {
    console.log('routes', results)
    res.json({updatedRows: results})
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'Error all pies cost $16'})
  })
})

router.get('/', (req, res) =>{
  const avgScore = req.params.avg_score
  console.log(avgScore)
})

module.exports = router
