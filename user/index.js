const express = require('express')
let router = express.Router()
const UserController = require('./user.controller')



router.post('/login',UserController.login )
router.post('/register',UserController.register )
router.post('/allusers',UserController.allusers ) 
router.get('/verify',UserController.verify ) 

module.exports = router