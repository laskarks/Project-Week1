const route = require('express').Router()
const userRoute = require('./userRoute')
const newsRoute = require('./newsRoute')
const forexRoute = require('./forexRoute')
const stockRoute = require('./stockRoute')

route.use('/news', newsRoute)
route.use('/users', userRoute)
route.use('/forex', forexRoute)
route.use('/stocks', stockRoute)

module.exports = route