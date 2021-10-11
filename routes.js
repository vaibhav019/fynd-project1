const express = require('express')
let router = express.Router()
let userroutes = require('./user')
let employeeroutes=require('./employee')
//let coverroutes=require('./cover')
//let searchroutes=require('./search')
router.use('/user', userroutes)
//router.use('/cover',coverroutes)
router.use('/employee',employeeroutes)
// let searchroutes=require('./search')
 //router.use('/searach',searchroutes)

module.exports = router

