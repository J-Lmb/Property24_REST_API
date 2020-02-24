const mongoose = require('mongoose');

//create schema
const UserSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: String,
    password: String,
    properties:[
        {
            type:mongoose.Schema.ObjectId
        }
    ]
});

module.exports = mongoose.model('Users', UserSchema);