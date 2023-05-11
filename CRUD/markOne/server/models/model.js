const mongoose = require('mongoose');

// mongoDB schema is defined here
let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
});

const userDB = mongoose.model('userdb', userSchema);
module.exports = userDB;