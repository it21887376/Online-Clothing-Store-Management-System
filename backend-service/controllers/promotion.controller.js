const asyncHandler = require('express-async-handler');
const Promotion = require("../models/promotion.model");


// @desc    Create new Promotion
// @route   POST /api/v1/promotion
// @access  Public
const addPromo = asyncHandler(async (req, res) => {
    const promotion = await new Promotion(req.body);

    try {
      const savedPromotion = await promotion.save();
      res.status(201).json(savedPromotion);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
})

// @desc    Get promotion by ID
// @route   GET /api/v1/promotion/:id
// @access  Public
const getPromotionById = asyncHandler(async (req, res) => {
  const promotion = await Promotion.findById(req.params.id);

  if (promotion) {
    res.json(promotion)
  } else {
    res.status(404)
    throw new Error('promotion not found')
  }
})

// @desc    Update promotion
// @route   PUT /api/v1/promotion/:id
// @access  Public
const updatePromotion = asyncHandler(async (req, res) => {
  try {
    const updatePromotion = await Promotion.updateOne(
      { _id: req.params.id },
      {
        $set: {
          Promotion: req.body.Promotion,
          ProductName: req.body.ProductName,
          PromoName: req.body.PromoName,
          RealPrice: req.body.RealPrice,
          DiscountedPrice: req.body.DiscountedPrice,
          Image: req.body.Image
        },
      }
    );
    res.json(updatePromotion);
  } catch (err) {
    res.status(404)
    res.json({ message: err });
  }
})

// @desc    Get all Promotion
// @route   GET /api/v1/promotion
// @access  Public
const getAllPromotion = asyncHandler(async (req, res) => {
    try {
        const promotion = await Promotion.find()
        res.status(200).json(promotion)
    } catch (err) {
        res.json({ message: err });
    }
})

// @desc    Delete promo
// @route   DELETE /api/v1/promotion/:id
// @access  Public
const deletePromotion = asyncHandler(async (req, res) => {
    const promotion = await Promotion.findById(req.params.id)
  
    if (promotion) {
      await promotion.remove()
      res.json({ message: 'promotion removed' })
    } else {
      res.status(404)
      throw new Error('promotion not found')
    }
})

module.exports = {
  addPromo,
  getPromotionById,
  updatePromotion,
  getAllPromotion,
  deletePromotion
}
