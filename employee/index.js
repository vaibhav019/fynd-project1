const express=require('express')
const EmployeeControllerPage=require('./employeepage.controller')
const EmployeeController=require('./employee.controller')
const AuthService=require('../auth.service')

let router=express.Router()

 router.post('/addemployee',AuthService.islogedin,AuthService.isAdmin,EmployeeController.addemployee)
//router.post('/addemployee',EmployeeController.addemployee)
router.get('/getallemployee',AuthService.islogedin,EmployeeController.getallemployee)
router.get('/getallemployeepage',AuthService.islogedin,EmployeeControllerPage.getallemployee)
router.get('/getemployeeprofilebycode',AuthService.islogedin,EmployeeControllerPage.getallemployeebycode)
router.post('/getallemployeebycode',AuthService.islogedin,EmployeeController.getallemployeebycode)
//router.post('/getallemployeebycode:employeecode',EmployeeController.getallemployeebycode)
router.put('/updateemployeebycode',AuthService.islogedin,AuthService.isAdmin,EmployeeController.updateemployeedetail)
//router.put('/updateemployeebycode',EmployeeController.updateemployeedetail)
router.delete('/deleteemployeebycode',AuthService.islogedin,AuthService.isAdmin,EmployeeController.deleteemployeedetail)
//router.delete('/deleteemployeebycode',EmployeeController.deleteemployeedetail)
//router.get('/getsheet',EmployeeController.getsheet)




module.exports=router 