
const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')

const { getUsers,
        userExists, 
        getUserByUsername, 
        createUser } = require('../db/auth')

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  getUserByName: getUserByUsername,
  createUser
})

router.get('/', (req,res) => {
  return getUsers()
    .then(users => {
      res.json(users)
  })
})

module.exports = router