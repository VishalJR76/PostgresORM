var express = require('express')
var router = express.Router()

const userController = require('../controller/userController')
router.post('/create',userController.newUser)

module.exports = router