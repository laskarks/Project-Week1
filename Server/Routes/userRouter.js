const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController')
const stockController = require ('../Controllers/stockMarketPrice')
const Authentification = require ('../Middleware/authentication')


router.get('/',userController.readAll)
router.post('/',userController.create);
router.post('/signIn',userController.signIn);
router.get('/api',Authentification,userController.readAll)
router.get('/stock',stockController.readAll)


module.exports = router

