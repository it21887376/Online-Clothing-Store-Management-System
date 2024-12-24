const asyncHandler = require('express-async-handler');
const Employee = require("../models/employee.model");

// @desc    Create new Employee
// @route   POST /api/v1/employee
// @access  Public
const addEmplyees = asyncHandler(async (req, res) => {
    const employee = await new Employee(req.body);

    try {
      const savedEmployee = await employee.save();
      res.status(201).json(savedEmployee);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
})

// @desc    Get emplyee by ID
// @route   GET /api/v1/employee/:id
// @access  Public
const getEmplyeeById = asyncHandler(async (req, res) => {
  const emplyee = await Employee.findById(req.params.id);

  if (emplyee) {
    res.json(emplyee)
  } else {
    res.status(404)
    throw new Error('Employee not found')
  }
})

// @desc    Update employee
// @route   PUT /api/v1/employee/:id
// @access  Public
const updateEmployee = asyncHandler(async (req, res) => {
  try {
    const updateEmployee = await Employee.updateOne(
      { _id: req.params.id },
      {
        $set: {
          FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          UserName: req.body.UserName,
          Email: req.body.Email,
          NIC: req.body.NIC,
          DOB: req.body.DOB,
          Address: req.body.Address,
        },
      }
    );
    res.json(updateEmployee);
  } catch (err) {
    res.status(404)
    res.json({ message: err });
  }
})

// @desc    Get all Employees
// @route   GET /api/v1/employees
// @access  Public
const getAllEmployees = asyncHandler(async (req, res) => {
    try {
        const employee = await Employee.find()
        res.status(200).json(employee)
    } catch (err) {
        res.json({ message: err });
    }
})

// @desc    Delete employee
// @route   DELETE /api/v1/employee/:id
// @access  Public
const deleteEmployee = asyncHandler(async (req, res) => {
    const empoyee = await Employee.findById(req.params.id)
  
    if (empoyee) {
      await empoyee.remove()
      res.json({ message: 'User removed' })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
})

module.exports = {
  addEmplyees,
  getEmplyeeById,
  updateEmployee,
  getAllEmployees,
  deleteEmployee
}
