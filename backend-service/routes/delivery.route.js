const express = require('express');
const router = express.Router()
const {
  updateDelivery,
  addDelivery,
  getDeliveryById,
  getAllDelivery,
  deleteDelivery
} = require('../controllers/delivery.controller')

router.route('/').post(addDelivery)
router.route('/').get(getAllDelivery)
router.route('/:id').get(getDeliveryById)
router.route('/:id').put(updateDelivery)
router.route('/:id').delete(deleteDelivery)

module.exports = router;

