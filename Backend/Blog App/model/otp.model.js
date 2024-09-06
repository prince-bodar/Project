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
    versionkey:false,
    timestamp:true
});


module.exports = mongoose.model("OTP", otpSchema);