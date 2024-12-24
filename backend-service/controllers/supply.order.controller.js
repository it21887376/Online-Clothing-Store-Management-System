const asyncHandler = require("express-async-handler");
const SupplierOrder = require("../models/supplier.order.model");

// @desc    Create new Employee
// @route   POST /api/v1/employee
// @access  Public
const addSupplierOrder = asyncHandler(async (req, res) => {
  const supplierOrder = await new SupplierOrder(req.body);

  try {
    const savedSupplier = await supplierOrder.save();
    res.status(201).json(savedSupplier);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

// @desc    Get supply by ID
// @route   GET /api/v1/supply/:id
// @access  Public
const getSupplierOrderById = asyncHandler(async (req, res) => {
  const supplier = await SupplierOrder.findById(req.params.id);

  if (supplier) {
    res.json(supplier);
  } else {
    res.status(404);
    throw new Error("Supply not found");
  }
});

// // @desc    Update Supplier
// // @route   GET /api/v1/supplier/:id
// // @access  Public
const updateOrder = asyncHandler(async (req, res) => {
  try {
    const updateOrder = await SupplierOrder.updateOne(
      { _id: req.params.id },
      {
        $set: {
          Supplier: req.body.Supplier,
          Item: req.body.Item,
          Quantity: req.body.Quantity,
          OrderDate: req.body.OrderDate,
          RequiredDate: req.body.RequiredDate,
        },
      }
    );
    res.json(updateOrder);
  } catch (err) {
    res.status(404);
    res.json({ message: err });
  }
});

// // @desc    Get all Employees
// // @route   GET /api/v1/employees
// // @access  Public
const getAllSuppliersOrder = asyncHandler(async (req, res) => {
  try {
    const supply = await SupplierOrder.find();
    res.status(200).json(supply);
  } catch (err) {
    res.json({ message: err });
  }
});

// // @desc    Delete employee
// // @route   DELETE /api/v1/employee/:id
// // @access  Public
const deleteOrder = asyncHandler(async (req, res) => {
  const order = await SupplierOrder.findById(req.params.id);

  if (order) {
    await order.remove();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

module.exports = {
  addSupplierOrder,
  getSupplierOrderById,
  getAllSuppliersOrder,
  deleteOrder,
  updateOrder,
};
