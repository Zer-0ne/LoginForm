const mongoose = require('mongoose')
const peoples = new mongoose.Schema({
    firstname :{
        type: String,
        required:true
    },
    number :{
        type: Number,
        required:true
    },
    email_address :{
        type: String,
        required:true,
        unique:true
    },
    password :{
        type: String,
        required:true,
    },
    cpassword :{
        type: String,
        required:false,
    }
})
const signup = new mongoose.model('Login-info',peoples)
module.exports = signup;