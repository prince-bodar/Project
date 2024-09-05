const express = require('express');
const { showRegisterPage, registerUser, showLoginPage, loginUser, logout } = require('../controller/user.controller');
const { verifyToken } = require('../helper/tokenVerify');
const { generateotp, verifyotp } = require('../controller/otpveryfication');
const userRoutes = express.Router();

userRoutes.get("/register", showRegisterPage);
userRoutes.post("/register", registerUser);

userRoutes.get("/login", showLoginPage);
userRoutes.post("/login",loginUser);

userRoutes.get("/logout", verifyToken, logout);

userRoutes.post("/genrateotp" , generateotp )
userRoutes.post("/verifyotp" , verifyotp )
module.exports = userRoutes;