const express = require('express')

const db = require('../db/properties')

const router = express.Router()

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
    parking: req.body.parking

  }
  console.log(req.body)
  db.addProperty(property)
  .then(property => {
    res.json({ property: property })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Post property broken' })
  })
})

module.exports = router
