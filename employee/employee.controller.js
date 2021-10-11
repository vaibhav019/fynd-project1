const EmployeeService = require('./Employee.service')

//const Employeemodel = require('./employee.model');


exports.addemployee = function (req, res) {
   console.log(req.body);

    EmployeeService.addemployee(req.body).then(function (result) {
        console.log('............Cover Controller data added to DB..........')
        res.send({
            "Message" :"data added to DB",
            "data":result
        })
    })
}

exports.getallemployee=function(req,res){
    console.log('.............getemployee controller- for for returning employee............')
    
    EmployeeService.getallemployee().then(function(result){
       console.log('see all employee ::: ',result)

        res.send(result);
        
    })
}


exports.getallemployeebycode=function(req,res){
    console.log('.............controller- Getting Brand name for for returning cover............')
    console.log("params is",req.query)
    EmployeeService.getallemployeebycode(req.query).then(function(data){
      //  console.log('see all cover of brand  ::: ',req.body.title)
        res.send({
            "Message":"see all employee ",
            "Message1":data
        })
    })
}

exports.updateemployeedetail=function(req,res){
    console.log("code is",req.query)
    console.log("body is",req.body)
    EmployeeService.updateemployee(req.query,req.body).then(function(result){
        console.log("data is updated")
        res.send({
            "message":" data updated",
            "data":result
        })
    }).catch(function(){
        console.log("error in update employee")
        res.send({
            "message":"error in data update"
        })
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



