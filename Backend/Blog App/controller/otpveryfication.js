const otpGenerator = require('otp-generator')
const nodemailer = require('nodemailer')
const userOTP = require('../model/user.model')

exports.generateotp = async (req,res) => {
    const { email } = req.body;

    const otp = otpGenerator.generate(6, { 
        digits: true, 
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false, 
        specialChars: false 
      });
    console.log(otp); 
    try {
        await userOTP.create({ email, otp });
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'bodarprince2@gmail.com',
                pass: 'ymfjqfxmqcsthxjh'
            }
        });
        
        await transporter.sendMail({
            from: 'bodarprince2@gmail.com',
            to: email,
            subject: 'OTP Verification',
            text: `Your OTP for verification is: ${otp}`
        });

        res.status(200).send('OTP sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending OTP');
    }
}

exports.verifyotp = async (req, res) => {
    const { email, otp } = req.body;

    try {
        const otpRecord = await userOTP.findOne({ email, otp }).exec();

        if (otpRecord) {
            res.status(200).send('OTP verified successfully');
        } else {
            res.status(400).send('Invalid OTP');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error verifying OTP');
    }
}