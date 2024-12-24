const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  SupplierName: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  SupplyItem: {
    type: String,
    required: true,
  },
  ContactNumber: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
});

const Supplier = mongoose.model("supplier", PostSchema);

module.exports = Supplier;
