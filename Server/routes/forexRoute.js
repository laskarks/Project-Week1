const route = require('express').Router()
const ForexController = require('../controllers/forexController')

route.get('/', ForexController.getRealTimeData)

module.exports = route