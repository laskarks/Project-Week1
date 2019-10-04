const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController')
const Authentification = require ('../Middleware/authentication')

router.get('/',userController.readAll)
router.post('/',userController.create);
router.post('/login',userController.login);

module.exports = router





