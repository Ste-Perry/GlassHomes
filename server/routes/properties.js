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

module.exports = router
