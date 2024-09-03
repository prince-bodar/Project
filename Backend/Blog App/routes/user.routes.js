const express = require('express');
const { showRegisterPage, registerUser, showLoginPage, loginUser, logout } = require('../controller/user.controller');
const { verifyToken } = require('../helper/tokenVerify');
const userRoutes = express.Router();

userRoutes.get("/register", showRegisterPage);
userRoutes.post("/register", registerUser);

userRoutes.get("/login", showLoginPage);
userRoutes.post("/login",loginUser);

userRoutes.get("/logout", verifyToken, logout);

module.exports = userRoutes;