const express = require('express');
const router = express.Router();

const middleware = require('./middleware');
const stockController = require('../controllers/stockController');

router.post('/addSingleProduct',  stockController.addSingleProduct)

router.put('/getProductList',  stockController.getProductList)

router.get('/getProductDetail/:productId',  stockController.getProductDetail)

router.get('/sendInquiry/:productId',  stockController.sendProductInquiry)

router.put('/getPendingProducts',  stockController.getAllPendingProducts)

router.get('/getAllCompanies',  stockController.getAllCompanies)

router.post('/upload',  stockController.uploadImage)




module.exports = router;
