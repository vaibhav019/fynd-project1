const Userservice = require('./user.service')
const Authservice=require('../auth.service')
//const Usermodel = require('./user.model')
const Mailservice=require('../mail.service')
//const MailMessage = require('nodemailer/lib/mailer/mail-message')
//const express = require('express')
exports.register = function(req,res){
    console.log("data received",req.body)
    Userservice.adduser(req.body).then(function(){
        console.log("============================================")
        console.log("data received",req.body)
        Authservice.createToken({email:req.body.email},function(error,token){
            console.log("=================================================================================")
            if(error){
                //remove te user from the  database and send internal server error
                Userservice.deleteuser(req.body)
                res.status(500).send()
            }else{
                //create the url
                //const url=req.protocol+"://"+req.hostname+"user/verify?token="+tokenq
                const hardcodedurl="http://localhost:9000/user/verify?token="+token
                console.log("url",hardcodedurl);
                Mailservice.sendVerificationMail(req.body.email,hardcodedurl).then(function(){
                    console.log("check your mail")
                  res.send({
                      message:"user registerd please check your mail for veification"
                      
                  })
                }).catch(function(){
                    Userservice.deleteuser(req.body)
                    res.status(500).send()
                })

                
            }
        })
        // res.send({
        //     message:"user Registered"
        // })
    },function(error){
        if(error == "Duplicate"){
            res.status(409).send({
                error:"User with Email Already Exists"
            })
        }
        else
        res.status(500).send({
        })
    })
}


exports.login = function(req,res){
    console.log("data received",req.body)
    Userservice.findUser(req.body).then(function(result){
        console.log("===============================")
        console.log(result)
        var payload={
            email:result.email,
            role:result.role
                    }
        if(result){
            Authservice.createToken(payload,function(error,token){
                res.set("authtoken",token)
                res.send({
                    message:"Login Successful"
                })
            })
            
        }
        else{
            res.send({
                message:"Invalid Credentials"
            })
        }
       
    },function(error){
        res.status(500).send({error
        })
    })
}


exports.allusers = function(req,res){
    Userservice.findUser().then(function(result){
        if(result){
            res.send({
                message:result
            })
        }
        else{
            res.send({
                message:"Invalid Credentials"
            })
        }
       
    },function(error){
        res.status(500).send({error
        })
    })
    
 }
exports.verify= function(req,res){
    var token=req.query.token
    console.log('#######################################')

    Authservice.verifyToken(token,function(error,payload){
        if(error){
            res.status(500).send(error)
        }else{
            Userservice.verifyuser(payload.email).then(function(result){
            res.send({"message":"user verified","data":result})
            }).catch(function(){
             res.status(500).send()
            })
        }
    })

   
}


