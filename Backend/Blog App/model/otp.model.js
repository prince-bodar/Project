const mongoose = require('mongoose');

const otpSchema  = mongoose.Schema({
    email: {
        type: String,
        required:true,
    },
    otp: {
        type: Number,
        required:true,
    },
},{
    versionKey: false
});


module.exports = mongoose.model("OTP", otpSchema);