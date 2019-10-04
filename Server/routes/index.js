const route = require('express').Router()
const userRoute = require('./userRoute')
const newsRoute = require('./newsRoute')
const forexRoute = require('./forexRoute')

route.use('/news', newsRoute)
route.use('/users', userRoute)
route.use('/forex', forexRoute)

module.exports = route