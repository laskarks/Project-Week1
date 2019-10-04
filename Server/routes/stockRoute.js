const express = require('express');
const router = express.Router();
const stockMarketController = require('../controllers/stockController')

router.get('/',stockMarketController.readFew)
router.post('/',stockMarketController.readOne)

module.exports = router;