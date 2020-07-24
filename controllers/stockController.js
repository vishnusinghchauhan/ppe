const express = require("express");
const router = express.Router();

const path = require("path");
const multer = require("multer");

const mongoose = require("mongoose");
const moment = require('moment');
const Product = require('../models/Product');
const Company = require('../models/Company');


const SetResService = require("../services/SetResponseService");
const applicationMessage = require("../utilities/ApplicationMessages");
const emailService = require("../utilities/EmailUtilities");


const storage = multer.diskStorage({
   destination: "./client/public/uploads/",
   filename: function(req, file, cb){
      cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
   }
});

const upload = multer({
   storage: storage,
   limits:{fileSize: 1000000},
}).single("myImage");



exports.uploadImage = (req, res) => {
    console.log("ddddddddddd", req.body)

       upload(req, res, (err) => {
      console.log("Request ---", req.body);
      console.log("Request file ---", req.file);//Here you get file.
      /*Now do where ever you want to do*/
        //return res.send(200).end();
        var fileObj = req.file
      if(!err)
          return res.status(200).json(SetResService.setResponse(applicationMessage.Message.Success.success, fileObj, true, 200));

   });
}

exports.addSingleProduct = (req, res) => {
    console.log("ddddddddddd", req.body)
    const newProduct = new Product({ ...req.body });
    console.log("rdddddddddddd", newProduct)

    newProduct.save().then(Product => {
          return res.status(200).json(SetResService.setResponse(applicationMessage.Message.Success.successInserted,  Product, true, 200));
    }).catch(err =>{
            return res.status(500).json(SetResService.setResponse(applicationMessage.Message.Error.someThingWentWrong,  err, false, 500));
    });

}




exports.getProductList = (req, res) => {
    console.log("getProductList running...", req.body)
    var limit = parseInt(req.body.pageLimit)
    var page = parseInt(req.body.pageIndex)
    var skip = parseInt(req.body.activePage) == 1 ? 0 : (page-1) * limit
    var queryObj;
    // is_approved add
    if(req.body.search_item && req.body.search_category){
        queryObj =  { is_deleted:false, category: req.body.search_category, title:  {'$regex': req.body.search_item,  '$options' : 'i'} }
    }else if(req.body.search_item){
        queryObj =  { is_deleted:false, title:  {'$regex': req.body.search_item,  '$options' : 'i'} }
    }else if(req.body.search_category){
        queryObj =  { is_deleted:false, category: req.body.search_category }
    }else{
        queryObj =  { is_deleted:false}
    }
    console.log("resssssssssssssss", queryObj)
    Product.find(queryObj).populate({path:'company_id'}).skip(skip).limit(limit).sort({create_date: -1}).exec(function(err, stocklist) { 
        if(err){
            return res.status(400).json(SetResService.setResponse(applicationMessage.Message.Error.someThingWentWrong,  err, false, 400));
        }else{
            Product.count(queryObj).exec(function(err, count) {
                var obj ={ stocklist:stocklist, count:count }
                return res.status(200).json(SetResService.setResponse(applicationMessage.Message.Success.success,  obj, true, 200));
            })
        }
    });
}


exports.getProductDetail = (req, res) => {
    console.log("getProductList running...", req.params.productId)
    var productId = req.params.productId
    Product.findOne({is_deleted:false, "_id":productId }).then(productDetails => {
            console.log("getProductList running...")
          return res.status(200).json(SetResService.setResponse(applicationMessage.Message.Success.successInserted,  productDetails, true, 200));
    }).catch(err =>{
            return res.status(500).json(SetResService.setResponse(applicationMessage.Message.Error.someThingWentWrong,  err, false, 500));
    });
}

exports.getAllPendingProducts = (req, res) => {
    console.log("getAllPendingProducts running...", req.body)

    var limit = parseInt(req.body.pageLimit)
    var page = parseInt(req.body.pageIndex)
    var skip = parseInt(req.body.activePage) == 1 ? 0 : (page-1) * limit
    var queryObj;
    // is_approved add
    if(req.body.company_by_company && req.body.company_by_title){
        queryObj =  { is_deleted:false, is_approved:false, company_id: req.body.company_by_company, title:  {'$regex': req.body.company_by_title,  '$options' : 'i'} }
    }else if(req.body.company_by_title){
        queryObj =  { is_deleted:false, is_approved:false, title:  {'$regex': req.body.company_by_title,  '$options' : 'i'} }
    }else if(req.body.company_by_company){
        queryObj =  { is_deleted:false, is_approved:false, company_id: req.body.company_by_company }
    }else{
        queryObj =  { is_deleted:false, is_approved:false}
    }


    Product.find(queryObj).populate({path:'company_id'}).exec(function(err,productData){
        if(err){
            return res.status(400).json(SetResService.setResponse(applicationMessage.Message.Error.failPendingProduct,  err, false, 500));
        }else{
            console.log("productData...")
            return res.status(200).json(SetResService.setResponse(applicationMessage.Message.Success.successPendingProduct, productData, true, 200));
        }
    })
}


exports.getAllCompanies = (req, res) => {
    console.log("getAllCompanies running...")

    Company.find({is_deleted:false}).exec(function(err,companyList){
        if(err){
            return res.status(400).json(SetResService.setResponse(applicationMessage.Message.Error.someThingWentWrong,  err, false, 500));
        }else{
            console.log("productData...")
            return res.status(200).json(SetResService.setResponse(applicationMessage.Message.Success.success, companyList, true, 200));
        }
    })
}






exports.sendProductInquiry = (req, res) => {
    console.log("getProductList running...", req.params.productId)
    var productId = req.params.productId

    Product.findOne({is_deleted:false, "_id":productId }).then(productDetails => {
        console.log("getProductList running...", productDetails._id)
        if(productDetails){
            var companyId =  productDetails.company_id;
            Company.findOne({ is_deleted:false, "_id": companyId}).then(companyDetail =>{
                console.log("sssssssssss", companyDetail.email)

                var subject = `Product Inquiry ${productDetails.title}`;
                var emailBody= `Hi ${companyDetail.name}, Product inquiry of  ${productDetails.title}`
                var toEmail = companyDetail.email

                emailService.productInquiry(toEmail, subject, emailBody).then(response=>{
                    console.log("Sent success", response)
                    return res.status(200).json(SetResService.setResponse(applicationMessage.Message.Success.emailProductInquirySuccess,  null, false, 200));
                }).catch(emailErr=>{
                    console.log("Sent fail",emailErr)
                    return res.status(500).json(SetResService.setResponse(applicationMessage.Message.Error.emailProductInquiryFail,  emailErr, false, 500));
                })

            }).catch(err=>{
                 return res.status(500).json(SetResService.setResponse(applicationMessage.Message.Error.companyNotFound,  err, false, 500));
            })
        }else{
            return res.status(500).json(SetResService.setResponse(applicationMessage.Message.Error.productNotFound,  err, false, 500));
        }
    }).catch(err =>{
            return res.status(500).json(SetResService.setResponse(applicationMessage.Message.Error.someThingWentWrong,  err, false, 500));
    });
}
