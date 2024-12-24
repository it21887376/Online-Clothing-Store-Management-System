const express = require('express');
const router = express.Router()

const { addPayment } = require('../controllers/payment.controller')

router.route('/').post(addPayment)

module.exports = router;

