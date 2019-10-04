const express = require('express');
const router = express.Router();
const stockMarketController = require('../Controllers/stockMarketPrice')
const Authentification = require ('../Middleware/authentication')

router.get('/',stockMarketController.readFew)
router.post('/',stockMarketController.readOne)

module.exports = router;