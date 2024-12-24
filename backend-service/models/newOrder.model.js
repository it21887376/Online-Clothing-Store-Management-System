const mongoose = require("mongoose");

const newOrderSchema = new mongoose.Schema(
  {
    Items: [
      {
        type: Object,
      },
    ],
    TotalPrice: {
      type: Number
    }
  },
  {
    timestamps: false,
    versionKey: false,
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const NewOrder = mongoose.model("NewOrder", newOrderSchema);

module.exports = NewOrder;
