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
}
)

module.exports = router
