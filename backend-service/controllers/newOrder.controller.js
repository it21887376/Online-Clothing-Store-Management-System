const asyncHandler = require('express-async-handler');
const NewOrder = require("../models/newOrder.model");

// @desc    Create new NewOrder
// @route   POST /api/v1/order
// @access  Public
const addOrder = asyncHandler(async (req, res) => {
    const order = await new NewOrder(req.body);

    try {
      const savedOrder = await order.save();
      res.status(201).json(savedOrder);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
})

// @desc    Get all Orders
// @route   GET /api/v1/order
// @access  Public
const getAllOrders = asyncHandler(async (req, res) => {
    try {
        const order = await NewOrder.find()
        res.status(200).json(order)
    } catch (err) {
        res.json({ message: err });
    }
})


module.exports = {
  addOrder,
  getAllOrders,
}
