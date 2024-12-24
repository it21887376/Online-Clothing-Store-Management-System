const asyncHandler = require('express-async-handler');
const Inventory = require("../models/inventory.model");


// @desc    Create new Inventory
// @route   POST /api/v1/inventory
// @access  Public
const addInventory = asyncHandler(async (req, res) => {
    const inventory = await new Inventory(req.body);

    try {
      const savedInventory = await inventory.save();
      res.status(201).json(savedInventory);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
})

// @desc    Get inventory by ID
// @route   GET /api/v1/inventory/:id
// @access  Public
const getInventoryById = asyncHandler(async (req, res) => {
  const inventory = await Inventory.findById(req.params.id)
    .populate("InventoryType", "InventoryType")
    .populate("ProductFor", "ProductFor");

  if (inventory) {
    res.json(inventory)
  } else {
    res.status(404)
    throw new Error('Inventory not found')
  }
})

// @desc    Get inventory by ID
// @route   GET /api/v1/inventory/:id
// @access  Public
const getInventoryByInventoryType = asyncHandler(async (req, res) => {
    const InventoryType = await Inventory.findById(req.query.Inventory_Type);
    console.log("InventoryType : ",req.query.Inventory_Type);

    if (!InventoryType) {
        res.status(404).json({ error: 'Inventory request' })
    }

    const inventory = await Inventory.find({InventoryType: req.query.Inventory_Type})
        .populate("InventoryType", "InventoryType")
        .populate("ProductFor", "ProductFor");
  
    if (inventory) {
    //   res.json(inventory)
        res.json(inventory.map(inventory => inventory.toJSON()))
    } else {
      res.status(404)
      throw new Error('Inventory not found')
    }
})

// @desc    Update inventory
// @route   PUT /api/v1/inventory/:id
// @access  Public
const updateInventory = asyncHandler(async (req, res) => {
  try {
    const updateInventory = await Inventory.updateOne(
      { _id: req.params.id },
      {
        $set: {
          ProductName: req.body.ProductName,
          Description: req.body.Description,
          price: req.body.price,
          Brand: req.body.Brand,
          Image: req.body.Image,
          InventoryType: req.body.InventoryType,
          ProductFor: req.body.ProductFor,
          isAvailable: req.body.isAvailable,
        },
      }
    );
    res.json(updateInventory);
  } catch (err) {
    res.status(404)
    res.json({ message: err });
  }
})

// @desc    Get all Inventory
// @route   GET /api/v1/inventory
// @access  Public
const getAllInventory = asyncHandler(async (req, res) => {
    try {
        const inventory = await Inventory.find()
        // .populate("InventoryType", "InventoryType")
            // .populate("ProductFor", "ProductFor");
        res.status(200).json(inventory)
    } catch (err) {
        res.json({ message: err });
    }
})

// @desc    Delete promo
// @route   DELETE /api/v1/inventory/:id
// @access  Public
const deleteInventory = asyncHandler(async (req, res) => {
    const inventory = await Inventory.findById(req.params.id)
  
    if (inventory) {
      await inventory.remove()
      res.json({ message: 'Inventory removed' })
    } else {
      res.status(404)
      throw new Error('Inventory not found')
    }
})

module.exports = {
  addInventory,
  getInventoryById,
  updateInventory,
  getAllInventory,
  deleteInventory,
  getInventoryByInventoryType
}
