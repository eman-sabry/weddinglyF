const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

    brideName: {
        type: String,
        required: [true, "This filed is required"]
    },
    groomName: {
        type: String,
        required: [true, "This filed is required"]
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        validate: [isEmail, "Please enter a valid email"],
        required: [true, "Please enter an email"]
    },
    password: {
        type: String,
        minlength: [8, "Minimum password length is 8 characters"],
        unique: true,
        required: [true, "Please enter your passward"]
    },
});


const User = mongoose.model('User', userSchema);
module.exports = User;