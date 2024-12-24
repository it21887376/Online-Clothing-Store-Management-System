const express = require('express');
const router = express.Router()
const {
  addInventory,
  getInventoryById,
  updateInventory,
  getAllInventory,
  deleteInventory,
  getInventoryByInventoryType
} = require('../controllers/inventory.controller')

router.route('/').post(addInventory)
router.route('/').get(getAllInventory)
router.route('/:id').get(getInventoryById)
router.route('/:id').put(updateInventory)
router.route('/:id').delete(deleteInventory)
router.route('/').get(getInventoryByInventoryType)

module.exports = router;

