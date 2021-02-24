const express = require('express')

const db = require('../db/fruits')

const router = express.Router()

router.get('/', (req, res) => {
  db.getProperties()
    .then(results => {
      res.json({ properties: results.map(property => property.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
