const router = require('express').Router()
const userController = require('../controllers/userController')

router.use('/gsignin', userController.googleLogin)

module.exports = router