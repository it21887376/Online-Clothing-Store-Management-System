const express = require('express');
const router = express.Router()
const {
    addInventoryType,
    getAllInventory,
    deleteInventory,
    addProductFor,
    getAllProductFor,
    deleteProductFor
} = require('../controllers/ref_data.controller')

router.route('/Inventory-Type').post(addInventoryType)
router.route('/Inventory-Type').get(getAllInventory)
router.route('/Inventory-Type/:id').delete(deleteInventory)
router.route('/Product-For').post(addProductFor)
router.route('/Product-For').get(getAllProductFor)
router.route('/Product-For/:id').delete(deleteProductFor)

module.exports = router;

