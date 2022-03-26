const mongoose = require("mongoose")//trae datos desde la base de datos

const usersSchema = new mongoose.Schema({
    firstname:{type:String, require:true},
    lastname:{type:String, require:true},
    email:{type:String, require:true},
    password:{type:String, require:true},
})

const User = mongoose.model("users",usersSchema)

module.exports = User;