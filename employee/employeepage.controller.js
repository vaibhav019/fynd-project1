const EmployeeService = require('./Employeepage.service')


exports.getallemployee=function(req,res){
    console.log('.............getemployee controller- for for returning employee............')
    
    EmployeeService.getallemployee().then(function(result){
       console.log('see all employee ::: ',result)
        res.render('allemployee',{data:result})
    })
}


exports.getallemployeebycode=function(req,res){
    console.log('.............controller- Getting Brand name for for returning cover............')
    console.log("params is",req.query)
    EmployeeService.getallemployeebycode(req.query).then(function(result){
      //  console.log('see all cover of brand  ::: ',req.body.title)
      console.log("+++++++++++++++++++++++++++++++++++++",result)
        res.render('employeeprofile',{data:result})
        
    })
}


exports.deleteemployeedetail=function(req,res){
    console.log("code is",req.query.employeecode)
    console.log("body is",req.body)
    EmployeeService.deleteemployee(req.query).then(function(result){
        console.log(result,"data is deleted")
        res.send({
            "message":"data deleted"
        })
    }).catch(function(){
        console.log("error in update employee")
        res.send({
            "message":"error in data deleted"
        })
    })
}