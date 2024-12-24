const mongoose = require("mongoose");

const ProductionSchema = new mongoose.Schema(
  {
    TypeofGarment: {
      type: String,
      required: true,
    },
    Gender: {
      type: String,
      required: true,
    },
    Size: [
      {
        type: Object,
      },
    ],
    Design: {
      type: String,
      required: true,
    },
    CompanyName: {
      type: String,
      required: true,
    },
    RequiredBy: {
      type: String,
      required: true,
    },
    Location: {
      type: String,
      required: true,
    },
    Status: {
      type: String,
      required: true,
      default: "Pending"
    },
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

const Production = mongoose.model("Production", ProductionSchema);

module.exports = Production;
