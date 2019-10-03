const route = require('express').Router()
const userRoute = require('./userRoute')
const newsRoute = require('./newsRoute')

route.use('/news', newsRoute)
route.use('/users', userRoute)

module.exports = route