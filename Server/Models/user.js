const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const hashPassword = require('../helpers/hashPassword')

const userSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required:true},
    password: {type: String, required:true}
})

userSchema.pre('save', function (next) {
    pass = this.password;
    this.password = hashPassword.hash(pass) 
    next();
})

const user = mongoose.model('User', userSchema)
module.exports = user;