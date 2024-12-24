const asyncHandler = require('express-async-handler');
const Delivery = require("../models/delivery.model");


// @desc    Create new Delivery
// @route   POST /api/v1/delivery
// @access  Public
const addDelivery = asyncHandler(async (req, res) => {
    const delivery = await new Delivery(req.body);

    try {
      const savedDelivery = await delivery.save();
      res.status(201).json(savedDelivery);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
})

// @desc    Get delivery by ID
// @route   GET /api/v1/delivery/:id
// @access  Public
const getDeliveryById = asyncHandler(async (req, res) => {
  const delivery = await Delivery.findById(req.params.id);

  if (delivery) {
    res.json(delivery)
  } else {
    res.status(404)
    throw new Error('Delivery details not found')
  }
})

// @desc    Update delivery
// @route   PUT /api/v1/delivery/:id
// @access  Public
const updateDelivery = asyncHandler(async (req, res) => {
  try {
    const updateDelivery = await Delivery.updateOne(
      { _id: req.params.id },
      {
        $set: {
          FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          Email: req.body.Email,
          PhoneNumber: req.body.PhoneNumber,
          Address: req.body.Address,
          ShippingAddress: req.body.ShippingAddress,
          DeliveryStatus: req.body.DeliveryStatus,
        },
      }
    );
    res.json(updateDelivery);
  } catch (err) {
    res.status(404)
    res.json({ message: err });
  }
})

// @desc    Get all Delivery
// @route   GET /api/v1/promotion
// @access  Public
const getAllDelivery = asyncHandler(async (req, res) => {
    try {
        const delivery = await Delivery.find()
        res.status(200).json(delivery)
    } catch (err) {
        res.json({ message: err });
    }
})

// @desc    Delete delivery
// @route   DELETE /api/v1/delivery/:id
// @access  Public
const deleteDelivery = asyncHandler(async (req, res) => {
    const delivery = await Delivery.findById(req.params.id)
  
    if (delivery) {
      await delivery.remove()
      res.json({ message: 'delivery details removed' })
    } else {
      res.status(404)
      throw new Error('delivery detailsn not found')
    }
})

module.exports = {
  updateDelivery,
  addDelivery,
  getDeliveryById,
  getAllDelivery,
  deleteDelivery
}
