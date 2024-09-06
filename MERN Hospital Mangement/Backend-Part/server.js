require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const port = process.env.PORT || 8000;
const dbURL = process.env.MONGO_URI;
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary');


app.use(cors({
    origin:[process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true,
}));


app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/",
}))





cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

mongoose
    .connect(dbURL)
    .then(() => console.log(`Connected...`))
    .catch((err) => console.log(err));

app.listen(port, async () => {
  console.log(`Servere start at http://localhost:${port}`);
});
