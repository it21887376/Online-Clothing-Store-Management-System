const express = require('express');
const router = express.Router()
const {
    paymentCon
} = require('../controllers/Payment.controller')

router.route('/').post(paymentCon)

module.exports = router;

