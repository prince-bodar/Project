const mongoose = require('mongoose');

const userSchema  = mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    otp: Number,
},{
    versionKey: false
});


module.exports = mongoose.model("users", userSchema);