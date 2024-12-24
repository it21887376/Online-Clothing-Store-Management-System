const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema(
  {
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    UserName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    NIC: {
        type: String,
        required: true,
    },
    DOB: {
        type: Date,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    }
  },
  {
    timestamps: false,
    versionKey: false,
  }
)

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee;