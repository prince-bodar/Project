require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const port = process.env.PORT || 8000;
const dbURL = process.env.MONGO_URI;

// view engine setup
app.set("view engine", 'ejs');

app.use(cookieParser());

// in-built middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));








mongoose
    .connect(dbURL)
    .then(() => console.log(`Connected...`))
    .catch((err) => console.log(err));

app.listen(port, async () => {
  console.log(`Servere start at http://localhost:${port}`);
});
