const express = require('express');
const router = express.Router()
const {
    addOrder,
    getAllOrders,
} = require('../controllers/newOrder.controller')

router.route('/').post(addOrder)
router.route('/').get(getAllOrders)

module.exports = router;

