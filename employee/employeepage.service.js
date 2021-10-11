const Employeemodel = require('./employee.model')



exports.getallemployee=function(){
    return new Promise(function(resolve,reject){
    Employeemodel.find().then(function(result){
        console.log("get all employee section")
            if(result){
                resolve(result)
            }else{
                reject()
            }
        },function(error){
            console.log('Error: Not Getting Cover Information',error)
           
        })
    })
}

exports.getallemployeebycode=function(data){
    console.log('===============')
    console.log(data)
    
    return new Promise(function(resolve,reject){
        Employeemodel.find(data).then(function(result){
            console.log("---------------------------------",result)
            if(result){
                resolve(result)
            }else{
                reject()
            }
        },function(error){
            console.log('Error: Not Getting Cover Information',error)
            reject()
        })
    })
}
