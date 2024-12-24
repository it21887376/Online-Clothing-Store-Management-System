const router = require("express").Router();
const Inventory = require('../models/inventory.model')
const {InventoryType, ProductFor} = require("../models/ref_data.model");

// @desc    Get product by Inventory
// @route   GET /api/v1/Filter-Inventory/ByInventoryType?Inventory_Type=6358847470155fa13ef264d6
// @access  Public
router.get('/ByInventoryType', async (request, response, next) => {
    try {
        const Inventory_Type = await InventoryType.findById(request.query.Inventory_Type);
    
        if (!Inventory_Type) {
          response.status(404).json({ error: 'Inventory request' })
        }
    
        const inventory = await Inventory.find({ InventoryType: request.query.Inventory_Type })
            .populate("InventoryType", "InventoryType")
            .populate("ProductFor", "ProductFor");
    
        response.json(inventory.map(inventory => inventory.toJSON()))
    } catch (err) {
        console.log(err)
    }
})

// @desc    Get product by Inventory
// @route   GET /api/v1/Filter-Inventory/ByProductFor?Product_For=6358847470155fa13ef264d6
// @access  Public
router.get('/ByProductFor', async (request, response, next) => {
    try {
        const Product_For = await ProductFor.findById(request.query.Product_For);
    
        if (!Product_For) {
          response.status(404).json({ error: 'Inventory request' })
        }
    
        const inventory = await Inventory.find({ ProductFor: request.query.Product_For })
            .populate("InventoryType", "InventoryType")
            .populate("ProductFor", "ProductFor");
    
        response.json(inventory.map(inventory => inventory.toJSON()))
    } catch (err) {
        console.log(err)
    }
})

module.exports = router

