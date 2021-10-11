const Usermodel = require('./user.model')
var UserModel = require('./user.model')

exports.adduser = function(data){
    

    return new Promise(function(resolve,reject){
        console.log("i have to do some work", data)
        var userdata = new UserModel(data)
        userdata.save().then(function(result){
            console.log("userd added into the collection", result)
            if(result){
                resolve(result)
            }
            else{
                resolve()
            }
            // resolve(result)
        },function(error){
            console.log("error in adding to user to collection ", error)
            if (error.code==11000)
            reject("Duplicate")
        })
    })
   
}


exports.findUser = function(data){
    // var UserModel = require('./user.model')
    var query ={
        email:data.email,
        password:data.password,
        verified:true
    }

    return new Promise(function(resolve,reject){
        console.log("i have to do some work", data)
        console.log( new UserModel(data))
        UserModel.findOne(query).then(function(result){
            console.log("result os find user", result)
            resolve(result)
        },function(error){
            console.log("error in adding to user to collection ", error)
            
            reject()
        })
    })
   
}


exports.verifyuser=function(email){
    //verify the token first from  the payload of the token we will extract email of
    //the user to which token was sign
    return new Promise(function(resolve,reject){
        var findQuery={
            email:email
        }
        var updateQuery={
            $set:{
                verified:true
            }
        }
        UserModel.findOneAndUpdate(findQuery,updateQuery).then(function(result){
            console.log("result of verifying user in db is ",result)
            resolve(result)
        },function(error){
            console.log("error of verifying user in db is ", error)
            reject(error)
        })

    })    
}


exports.deleteuser= function(data){
    return new Promise(function(resolve,reject){
        var query={
            email:data.email
        }
     Usermodel.remove(query).then(function(result){
console.log("result of removing user",result)
resolve()
     },function(error){
        console.log("error occured in removing user",error)
        reject()
     })

     
    })
}