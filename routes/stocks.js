const express = require('express');
const router = express.Router();

const middleware = require('./middleware');
const stockController = require('../controllers/stockController');

router.post('/addSingleProduct',  middleware.checkToken, stockController.addSingleProduct)

router.put('/getProductList', middleware.checkToken,  stockController.getProductList)

router.get('/getProductDetail/:productId', middleware.checkToken,  stockController.getProductDetail)

router.get('/sendInquiry/:productId', middleware.checkToken, stockController.sendProductInquiry)

router.put('/getPendingProducts', middleware.checkToken,  stockController.getAllPendingProducts)

router.get('/getAllCompanies', middleware.checkToken, stockController.getAllCompanies)

router.post('/upload',  middleware.checkToken, stockController.uploadImage)




module.exports = router;
