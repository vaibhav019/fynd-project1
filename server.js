const express = require('express')
const routes = require('./routes')
const Mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fs = require("fs");
const multer=require('multer')
const path=require('path')
const cors = require( 'cors' );
const dburl = "mongodb://localhost:27017/fyndprojectdb"

const Port = process.env.PORT || 9000

let server = express()
//server.use( cors() );
console.log(Port)

// configure to use EJS for templating
server.set( 'view engine', 'ejs' )
server.set( 'views', path.join( __dirname, 'views' ) );


server.use( express.static( path.join( __dirname, 'public' ) ) );


server.use( express.urlencoded( { extended: false } ) );

// Set up JSON data sent using Ajax request on req.body
//server.use( express.json() );


//server.use(bodyParser.urlencoded());

server.use(bodyParser.json());
//server.use(bodyParser.urlencoded({
 //   extended: true
 // }));

Mongoose.connect(dburl).then(function(){
    console.log("Connetcted to database")

    server.listen(Port, function(){
        console.log("server is running on :",Port)
    })
},function(error){
    console.log("Error in connecting to mongodb",error)
})


server.use(routes)



   
        





 
