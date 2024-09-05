require('dotenv').config();
const express = require('express');
const server = express();
const port = process.env.PORT || 6060;
 const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const imagepath = path.join(__dirname,'public','images');

const admin = require('./routes/admin/index_admin.routes');
const user = require('./routes/user/index_user.routes');


server.use(morgan('dev'));
server.use(express.json());
 
server.use('/api',admin);
server.use('/api',user);

server.use('/public/images',express.static(imagepath));


mongoose.connect(process.env.MONGO_DB_URL)
.then(()=>{console.log('DB connected...')})
.catch((error)=>{
    console.log(error);
});

server.listen(port,()=>{
    console.log(`connected at localhost:${port}`);
})