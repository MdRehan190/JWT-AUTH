const express=require('express');
const jwtAuth = require("../middleware/jwtAuth.js");
const {signup,signin,getUser,logout} = require('../controller/authController');
const authRouter = express.Router();
authRouter.post('/signup',signup);
authRouter.post('/signin',signin);
authRouter.get('/user', jwtAuth , getUser);
authRouter.get('/logout', jwtAuth ,logout);

module.exports = authRouter;