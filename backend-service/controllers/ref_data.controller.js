const asyncHandler = require('express-async-handler');
const {InventoryType, ProductFor} = require("../models/ref_data.model");

// @desc    Create new InventoryType
// @route   POST /api/v1/Inventory-Type
// @access  Public
const addInventoryType = asyncHandler(async (req, res) => {
    const inventoryType = await new InventoryType(req.body);

    try {
      const savedInventoryType = await inventoryType.save();
      res.status(201).json(savedInventoryType);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
})

// @desc    Get all InventoryType
// @route   GET /api/v1/Inventory-Type
// @access  Public
const getAllInventory = asyncHandler(async (req, res) => {
    try {
        const inventoryType = await InventoryType.find()
        res.status(200).json(inventoryType)
    } catch (err) {
        res.json({ message: err });
    }
})

// @desc    Delete InventoryType
// @route   DELETE /api/v1/Inventory-Type/:id
// @access  Public
const deleteInventory = asyncHandler(async (req, res) => {
    const inventoryType = await InventoryType.findById(req.params.id)
  
    if (inventoryType) {
      await inventoryType.remove()
      res.json({ message: 'InventoryType removed' })
    } else {
      res.status(404)
      throw new Error('InventoryType not found')
    }
})

// @desc    Create new ProductFor
// @route   POST /api/v1/Inventory-Type
// @access  Public
const addProductFor = asyncHandler(async (req, res) => {
    const productFor = await new ProductFor(req.body);

    try {
      const savedInventoryType = await productFor.save();
      res.status(201).json(savedInventoryType);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
})

// @desc    Get all ProductFor
// @route   GET /api/v1/Inventory-Type
// @access  Public
const getAllProductFor = asyncHandler(async (req, res) => {
    try {
        const productFor = await ProductFor.find()
        res.status(200).json(productFor)
    } catch (err) {
        res.json({ message: err });
    }
})

// @desc    Delete ProductFor
// @route   DELETE /api/v1/Inventory-Type/:id
// @access  Public
const deleteProductFor = asyncHandler(async (req, res) => {
    const productFor = await ProductFor.findById(req.params.id)
  
    if (productFor) {
      await productFor.remove()
      res.json({ message: 'ProductFor removed' })
    } else {
      res.status(404)
      throw new Error('ProductFor not found')
    }
})

module.exports = {
  addInventoryType,
  getAllInventory,
  deleteInventory,
  addProductFor,
  getAllProductFor,
  deleteProductFor
}
