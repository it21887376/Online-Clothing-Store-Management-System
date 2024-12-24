const asyncHandler = require('express-async-handler');
const Production = require("../models/production.model");

// @desc    Create new Production
// @route   POST /api/v1/production
// @access  Public
const addProduction = asyncHandler(async (req, res) => {
    const production = await new Production(req.body);

    try {
      const savedProduction = await production.save();
      res.status(201).json(savedProduction);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
})

// @desc    Get production by ID
// @route   GET /api/v1/production/:id
// @access  Public
const getProductionById = asyncHandler(async (req, res) => {
  const production = await Production.findById(req.params.id);

  if (production) {
    res.json(production)
  } else {
    res.status(404)
    throw new Error('production not found')
  }
})

// @desc    Update production
// @route   PUT /api/v1/production/:id
// @access  Public
const updateProduction = asyncHandler(async (req, res) => {
  try {
    const updateProduction = await Production.updateOne(
      { _id: req.params.id },
      {
        $set: {
            TypeofGarment: req.body.TypeofGarment,
            Gender: req.body.Gender,
            Size: req.body.Size,
            Design: req.body.Design,
            CompanyName: req.body.CompanyName,
            RequiredBy: req.body.RequiredBy,
            Location: req.body.Location,
            Status: req.body.Status
        },
      }
    );
    res.json(updateProduction);
  } catch (err) {
    res.status(404)
    res.json({ message: err });
  }
})

// @desc    Get all Production
// @route   GET /api/v1/production
// @access  Public
const getAllProduction = asyncHandler(async (req, res) => {
    try {
        const production = await Production.find()
        res.status(200).json(production)
    } catch (err) {
        res.json({ message: err });
    }
})

// @desc    Delete promo
// @route   DELETE /api/v1/production/:id
// @access  Public
const deleteProduction = asyncHandler(async (req, res) => {
    const production = await Production.findById(req.params.id)
  
    if (production) {
      await production.remove()
      res.json({ message: 'production removed' })
    } else {
      res.status(404)
      throw new Error('production not found')
    }
})

module.exports = {
  addProduction,
  getProductionById,
  updateProduction,
  getAllProduction,
  deleteProduction
}
