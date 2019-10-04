const route = require('express').Router()
const NewsController = require('../controllers/newsController')


route.get('/top', NewsController.getTopHeadlines)
route.get('/latest', NewsController.getLatestNews)

module.exports = route