const express = require('express');
const userModel = require('../models/usermodel.js');
const productModel = require('../models/productmodel.js');
const app = express();
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
var multer = require('multer');
var fs = require('fs');
var path = require('path');

//setting up the mailer

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.MAILER_ID ,
		pass: process.env.MAILER_PASS
	},
	tls: {
		rejectUnauthorized: false
	}
});
transporter.verify(function(error, success) {
	if (error) {
		console.log(error);
	} else {
		console.log('Server is ready to take our messages');
	}
});


// setting up to upload images

const DIR = './public/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, Date.now() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


// Authentication Begins

var otp;

app.post("/product", async (req, res) => {
	console.log(req.body);
	var products = await productModel.findOne({"_id":req.body.id});
	try
	{
		var email = String(products.email);
		console.log(products);
		console.log(email);
		var mailOptions = {
			from: process.env.MAILER_ID,
			to: email,
			subject: 'Request for product from '+req.body.name+ " for "+products.name,
			text: 'Message: '+req.body.message+'   For further queries contact me here: '+req.body.email
		};
		transporter.sendMail(mailOptions, function(err, data) { 
					if(err) { 
						console.log('Error Occured in sending mail' + err);
						res.status(500).send("Couldn't send Email");
					} else { 
						console.log('Email sent successfully'); 
						res.status(200).send("Email sent successfully!");
					} 
				});
	}
	catch(err)
	{
		res.status(500).send("Error occured while Updating Database");
	}
});


app.post("/service", async (req, res) => {
	console.log(req.body);
	var products = await productModel.findOne({"_id":req.body.id});
	try
	{
		var email = String(products.email);
		console.log(products);
		console.log(email);
		var mailOptions = {
			from: process.env.MAILER_ID,
			to: email,
			subject: 'Request for service from '+req.body.name+ " for "+products.name,
			text: 'Message: '+req.body.message+'   For further queries contact me here: '+req.body.email
		};
		transporter.sendMail(mailOptions, function(err, data) { 
					if(err) { 
						console.log('Error Occured in sending mail' + err);
						res.status(500).send("Couldn't send Email");
					} else { 
						console.log('Email sent successfully'); 
						res.status(200).send("Email sent successfully!");
					} 
				});
	}
	catch(err)
	{
		res.status(500).send("Error occured while Updating Database");
	}
});


app.post('/validate', async (req, res) => {

	if(req.session.user)
	{
		res.status(401).send("Already Logged In");
	}
	else
	{
		const {name,email,password,city} = req.body;
		const user = await userModel.find({'email':req.body.email});
		try {
			if(user.length == 0)
			{
				var otp = Math.floor((Math.random() * 10000) + 1);
				var mailOptions = {
					from: process.env.MAILER_ID,
					to: email,
					subject: 'Welcome to Saathi ' + name,
					text: 'Welcome to Saathi! Your Code to Complete the Registration Process is - '+otp +' Let us Grow together!'
				};

				var pwdHash = bcrypt.hashSync(password, 10);
				var otpHash = bcrypt.hashSync(String(otp), 10);
				const tempuser = 
				{
					"name": name,
					"email": email,
					"password": pwdHash,
					"city": city,
					"otp": otpHash
				}
				req.session.temp = tempuser;

				transporter.sendMail(mailOptions, function(err, data) { 
					if(err) { 
						console.log('Error Occured in sending mail' + err);
						res.status(500).send("Couldn't send Email");
					} else { 
						console.log('Email sent successfully'); 
						res.status(200).send("Email sent successfully!");
					} 
				});
			}
			else
			{
				res.status(500).send("Email already registered!");
			}
		} 
		catch (err) 
		{
			console.log("Error with database");
			console.log(err);
			res.status(500).send(err); 
		}
	}

});



app.post('/signup', async (req, res) => {

	if(req.session.user)
	{
		res.status(401).send("Already Logged In");
	}
	else
	{
		const {name,email,password,otp,city} = req.session.temp;
		const code = req.body.code;
		if(bcrypt.compareSync(code, req.session.temp.otp))
		{
			const data = {
				"name": req.session.temp.name,
				"email": req.session.temp.email,
				"password": req.session.temp.password,
				"city": req.session.temp.city,
			};

			const new_user = new userModel(data);

			try {
				await new_user.save();
				res.status(200).send("Your Profile has been created!");
			} catch (err) {
				console.log(err);
				res.status(500).send("Cannot Create Profile! Try Again");
			}

		}
		else
		{
			res.status(401).send("OTP isn't verified! Please try again");
		}
	}

});

app.post('/login', async (req,res) => {
	if(req.session.user)
	{
		res.status(401).send("Already Logged In");
	}
	else
	{
		const {email,password} = req.body;
		const user = await userModel.find({'email':req.body.email});
		try {
			if(user.length>0)
			{
				const result = bcrypt.compareSync(password, user[0].password);
				if(result)
				{
					req.session.user = user[0];
					res.status(200).json(req.session.user);
				}
				else
				{
					res.status(401).send("Incorrect Password");
				}
			}
			else
			{
				res.status(401).send("The email isn't registered.");
			}
		}
		catch(err)
		{
			res.status(500).send("Cannot Connect to Database!");
		}
	}

});

app.get("/logout", (req, res) => {
	console.log(req.session);
	if (req.session.user) {
		req.session.destroy(() => {
			res.status(200).send("Successfully Logged Out");
		})
	}
	else 
	{
		res.status(401).send("You are not logged in");
	}
});

// Authentication Ends Here

// User-related Requests

app.patch("/edit", async (req, res) => {
	if (req.session.user) {
		var user = await userModel.findOneAndUpdate({'email':req.session.user.email},{ "$set": { "name": req.body.name, "github": req.body.github, "codeforces": req.body.codeforces}},{new: true});
		try
		{
			req.session.user = user;
			res.status(200).json(req.session.user);
		}
		catch(err)
		{
			res.status(500).send("Error occured while Updating Database");
		}
	}
	else 
	{
		res.status(401).send("Please Log In to continue");
	}
});


app.get("/dashboard", async (req, res) => {
	console.log(req.session.user);
	if (req.session.user) {
		res.status(200).json(req.session.user);
	}
	else 
	{
		res.status(401).send("Please log in to continue");
	}
});


// posting the product
app.post("/add-product", upload.single('img') , async (req,res)=>{
	if(req.session.user)
	{
		console.log(req.session.user);
		const url = req.protocol + '://' + req.get('host')
		console.log(req.file);
		var obj = {
			name: req.body.name,
			description: req.body.description,
			email: req.session.user.email,
			userid: req.session.user._id,
			price: req.body.price,
			img: url + '/public/' + req.file.filename
		}
		console.log(obj);
		const new_product = new productModel(obj);

			try {
				await new_product.save();
				res.status(200).send("The Product has been added");
			} catch (err) {
				console.log(err);
				res.status(500).send("Cannot Add Product! Try Again");
			}

	}
	else
	{
		res.status(401).send("Please log in to continue");
	}
})



app.post("/add-service", async (req,res)=>{
	if(req.session.user)
	{
		//console.log(req.file);
		var obj = {
			name: req.body.name,
			description: req.body.description,
			email: req.session.user.email,
			userid: req.session.user._id,
			qualifucation: req.body.qualification,
			rate: req.body.rate
		}
		console.log(obj);
		const new_product = new serviceModel(obj);

			try {
				await new_product.save();
				res.status(200).send("The Service has been added");
			} catch (err) {
				console.log(err);
				res.status(500).send("Cannot Add Service! Try Again");
			}

	}
	else
	{
		res.status(401).send("Please log in to continue");
	}
})

// asking for products





// PUBLIC API Endpoints
// viewing the products

app.get("/products", async (req, res) => {

	var products = await productModel.find({});
	try
	{
		res.status(200).json(products);
	}
	catch(err)
	{
		res.status(500).send("Error occured while Updating Database");
	}
});


app.get("/services", async (req, res) => {

	var products = await serviceModel.find({});
	try
	{
		res.status(200).json(products);
	}
	catch(err)
	{
		res.status(500).send("Error occured while Updating Database");
	}
});




module.exports = app