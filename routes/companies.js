const express = require('express');
const router = express.Router();

const middleware = require('./middleware');
const companyController = require('../controllers/companyController');

router.post('/signup',  companyController.signUpUser)

router.post('/login',  companyController.loginUser)

router.get('/logout',   companyController.logoutUser)

router.get('/me/:user',   middleware.checkToken, companyController.getUserInfo)

module.exports = router;
