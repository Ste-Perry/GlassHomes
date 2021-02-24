const express = require('express')
const path = require('path')


const propertyRoutes = require('./routes/properties')
const reviewRoutes= require('./routes/reviews')
const userRoutes= require('./routes/users')



const authRoutes = require('./routes/auth')


const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))


server.use('/api/v1/properties', propertyRoutes)
server.use('/api/v1/reviews', reviewRoutes)
server.use('/api/v1/users', userRoutes )

server.use('/api/v1', authRoutes)


module.exports = server
