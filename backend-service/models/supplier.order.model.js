const mongoose = require("mongoose");

const SupplierSchema = mongoose.Schema({
  Supplier: {
    type: String,
    required: true,
  },
  Item: {
    type: String,
    required: true,
  },
  Quantity: {
    type: String,
    required: true,
  },
  OrderDate: {
    type: String,
    required: true,
  },
  RequiredDate: {
    type: String,
    required: true,
  },
});

const SupplierOrder = mongoose.model("supplierOrder", SupplierSchema);

module.exports = SupplierOrder;
