const mongoose = require('mongoose')

const deliverySchema = new mongoose.Schema(
  {
    OrderID:{
      type: String,
      required: true,
    },
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    PhoneNumber: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    ShippingAddress: {
      type: String,
      required: true,
    },
    DeliveryStatus:{
      type: String,
      required: true,
      default : "Pending"
    }
  },
  {
    timestamps: false,
    versionKey: false,
  }
)

const Delivery = mongoose.model('Delivery', deliverySchema)

module.exports = Delivery;