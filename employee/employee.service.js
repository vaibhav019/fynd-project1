
const Employeemodel = require('./employee.model')
exports.addemployee=function(data){
   
    return new Promise(function(resolve,reject){
        //data.coverid=Date.now()
        var employeedata=new Employeemodel(data)

        employeedata.save().then(function(result){
            console.log('Cover Information added to DB',result)
            if(result){
                resolve(result)
            }else{
                reject()
            }
         // res.render('employeedetails',{data:result})
        },function(error){
            console.log('Error in Cover Information added to DB',error)
            //reject()
        })
    })
}

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
            if(result){
                resolve(result)
            }else{
                reject()
            }
        },function(error){
            console.log('Error: Not Getting Cover Information',result)
            reject()
        })
    })
}
exports.deleteemployee= function(data){
    return new Promise(function(resolve,reject){
        // var query={
        //     employeecode:data
        // }
     Employeemodel.findOneAndRemove(data).then(function(result){
console.log("result of removing user",result)
resolve()
     },function(error){
        console.log("error occured in removing user",error)
        reject()
     })

     
    })
}
exports.updateemployee= function(data1,data2){
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log("data1",data1)
    console.log("data1",data2)
    return new Promise(function(resolve,reject){
        
        var findQuery={
             employeeCode:data1.employeeCode
            
            
        }
        var updateQuery={
             $set:{
                fullname:data2.fullname,
                email: data2.email,
                mobile: data2.mobile,
                city: data2.city,
                department:data2.department

            }
        }
        Employeemodel.findOneAndUpdate(findQuery,updateQuery,{new:true}).then(function(result){
            console.log("result of verifying user in db is ",result)
            resolve(result)
        },function(error){
            console.log("error of verifying user in db is ", error)
            reject(error)
        })

    })    
}

