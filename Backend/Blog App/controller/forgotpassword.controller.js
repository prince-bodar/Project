const otpGenerator = require('otp-generator')
const nodemailer = require('nodemailer')
require('dotenv').config()
const jwt = require('jsonwebtoken');
const UserOTP = require('../model/otp.model');
const User = require('../model/user.model')

/***********************Forgot Password Page***********************/
exports.forgotpasswordPage =async (req, res)=>{
    try {
        res.render("forgotpassword.ejs");
    } catch (error) {
        console.log(error);
        res.json({messag: "Server error"});
    }
}

/***********************OTP Vrify Page***********************/
exports.showverifyotppage = async (req, res)=>{
    try {
        res.render("otp.ejs");
    } catch (error) {
        console.log(error);
        res.json({messag: "Server error"});
    }
}


/***********************GenrateOTP***********************/
exports.generateotp = async (req,res) => {
    try {
    const otpmail = req.body.email;
    let user = await User.findOne({ email: otpmail });
    if(user)
    {
    const otp = otpGenerator.generate(4, { 
        digits: true, 
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false, 
        specialChars: false 
      });
    console.log(otp); 
        await UserOTP.create({email:otpmail , otp:otp});
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS,
            }
        });
        
        await transporter.sendMail({
            from:process.env.EMAIL,
            to: otpmail,
            subject: 'OTP Verification',
            text: `Your OTP for verification is: ${otp}`
        });

        res.status(200).render('otp.ejs');
    }else 
    {
        res.status(400).render("forgotpassword.ejs")
    }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending OTP');
    }
}

/***********************VerifyOTP***********************/
exports.verifyotp = async (req, res) => {
    try {
        const { otp } = req.body;
        const otpRecord = await UserOTP.findOne({ otp:otp}).exec();
        if (otpRecord) {
            res.status(200).redirect("/api/blog");
        } else {
            res.status(400).send('Invalid OTP');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error verifying OTP');
    }
}

exports.resendotp = async (req, res)=>{
    try {
        res.render("otp.ejs");
    } catch (error) {
        console.log(error);
        res.json({messag: "Server error"});
    }
}
