const asyncHandler = require("express-async-handler");
// const Employee  = require('../models/employee.model');
const Supplier = require("../models/supplier.model");

// @desc    Create new Employee
// @route   POST /api/v1/employee
// @access  Public
const addSupplier = asyncHandler(async (req, res) => {
  const supplier = await new Supplier(req.body);

  try {
    const savedSupplier = await supplier.save();
    res.status(201).json(savedSupplier);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

// @desc    Get supply by ID
// @route   GET /api/v1/supply/:id
// @access  Public
const getSupplierById = asyncHandler(async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);

  if (supplier) {
    res.json(supplier);
  } else {
    res.status(404);
    throw new Error("Supply not found");
  }
});

// @desc    Update Supplier
// @route   GET /api/v1/supplier/:id
// @access  Public
const updateSupplier = asyncHandler(async (req, res) => {
  try {
    const updateSuppliers = await Supplier.updateOne(
      { _id: req.params.id },
      {
        $set: {
          SupplierName: req.body.SupplierName,
          Address: req.body.Address,
          SupplyItem: req.body.SupplyItem,
          ContactNumber: req.body.ContactNumber,
          Email: req.body.Email,
        },
      }
    );
    res.json(updateSuppliers);
  } catch (err) {
    res.status(404);
    res.json({ message: err });
  }
});

// @desc    Get all Employees
// @route   GET /api/v1/employees
// @access  Public
const getAllSuppliers = asyncHandler(async (req, res) => {
  try {
    const supply = await Supplier.find();
    res.status(200).json(supply);
  } catch (err) {
    res.json({ message: err });
  }
});

// @desc    Delete employee
// @route   DELETE /api/v1/employee/:id
// @access  Public
const deleteSupplier = asyncHandler(async (req, res) => {
  const supply = await Supplier.findById(req.params.id);

  if (supply) {
    await supply.remove();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

module.exports = {
  addSupplier,
  getSupplierById,
  getAllSuppliers,
  deleteSupplier,
  updateSupplier,
};
