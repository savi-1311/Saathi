const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
require('dotenv').config();
const cors = require('cors');
var fs = require('fs');
var path = require('path');

app.use(bodyParser.json());
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("Connected DATABASE")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  HttpOnly: true,
  cookie: { maxAge: 3600000 }
}));

app.use('/', require('./routes/routes.js'));

app.listen(8080, console.log(`Server started on port 8080`));