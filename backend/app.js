const express = require('express');
const app = express();
const authRouter=require('./router/authRoute.js');
const databaseconnect = require('./config/databaseconfig.js');
const cookieParser = require('cookie-parser');
const cors = require('cors');
databaseconnect();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.CLIENT_URL],
    credentials:true
}))

app.use('/api/auth',authRouter)
app.use('/',(req,res)=> {
    res.status(200).json({data:'JWTAuth server updated'});
});
module.exports = app;
