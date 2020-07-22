const express = require("express");
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || 'someothersecretasdefault';
const mongoose = require("mongoose");
const moment = require('moment');
const Company = require('../models/Company');

const SetResService = require("../services/SetResponseService");
const applicationMessage = require("../utilities/ApplicationMessages");

exports.signUpUser = (req, res) => {
   // console.log("RESSSSSSSSSSSSSSSs",  req.body)
	const {email, password, cpassword } = req.body;
	   const errors = {};
	   if ( !email || !password || !cpassword) {
	       errors.message = "Please enter email / password";
	      return res.status(400).json(errors);
	  }
	  if (password != cpassword) {
	    errors.message = "Passwords do not match";
	    return res.status(400).json(errors);
	  }
	  console.log("yesssssssssssssss")
	   Company.findOne({ email: email }).then(company => {
	      if (company) {
	        errors.message = "Email already exists";
	        return res.status(400).json(errors);
	      } else {
	        const newCompany = new Company({ ...req.body });
	        console.log("RESSSSSSSSSSSAAAAAAAAAA",  newCompany)
	        bcrypt.genSalt(10, (err, salt) => {
	          bcrypt.hash(newCompany.password, salt, (err, hash) => {
	            if (err) throw err;
	            newCompany.password = hash;
	             console.info("register" , newCompany)
  	           newCompany.save().then(company => {
  	           	console.log("company....", company)
                    return res.status(200).json(SetResService.setResponse(applicationMessage.Message.Success.success,  company, true, 200));
  	            }).catch(err =>{
  	               console.info(err)
                    return res.status(500).json(SetResService.setResponse(applicationMessage.Message.Error.someThingWentWrong,  company, true, 500));
  	            });
	          });
	        });
	      }
	    });
	
}





exports.loginUser = async (req, res) => {
	console.log("user login calling...", req.body )
    const errors = {};
    const email = req.body.email
    const password = req.body.password;
	var company = await Company.findOne({ email:email }).exec()
    if (!company) {
        errors.message = "Email not found";
        return res.status(400).json(errors);
    }
    var isMatch = await bcrypt.compare(password, company.password);
    if (!isMatch) {
        errors.message = "Password is incorrect";
        return res.status(400).json(errors);
    }
    const payload = {
        id: company._id,
        username: company.name
    };
    token = await jwt.sign(payload, secret, { expiresIn: 36000 });
    if (!token) {
        return res.status(500).json({ error: "Error signing token", raw: err });
    }
    //superadmin@gmail.com
    return res.json({
        success: true,
        token: `${token}`,
        isSuperAdmin: email == "superadmin@gmail.com" ? true : false,
        user:{
            username:company.name,
            email:company.email,
            id:company._id
        } 
    });
    
    
}


exports.getUserInfo = async (req, res) => {
	 //logger.info("Profile calling...>>>>>>>>>>>>>>>>>>>>>>>",req.params.user)
    const email = req.params.user
    const dbUser = await Company.findOne({ email });
    res.status(200).json(dbUser);
}

exports.logoutUser = (req, res) => {
	localStorage.removeItem('id_token');
	localStorage.removeItem('loggedIn_email');
	res.redirect('/login');
}
