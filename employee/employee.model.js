const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,unique:true
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    },
    salary:{
        type:Number
    },
    employeeCode:{
        type:String,unique:true
    },
    department:{
        type:String
    },
    profileimage:{
        type:String,default:"http://res.cloudinary.com/dnylflyhu/image/upload/v1633893710/tzzmvbock4r1iwun8iuk.jpg"
    }
});



const Employeemodel = mongoose.model("Employee", employeeSchema);


module.exports =  Employeemodel