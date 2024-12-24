const mongoose = require('mongoose')

const prmoSchema = new mongoose.Schema(
  {
    ProductName:{
      type: String,
      required: true,
    },
    PromoName: {
      type: String,
      required: true,
    },
    RealPrice: {
      type: Number,
      required: true,
    },
    DiscountedPrice: {
      type: Number,
      required: true,
    },
    Image :{
      type: String,
      required: true,
    }
  },
  {
    timestamps: false,
    versionKey: false,
  }
)

const Promotion = mongoose.model('Promotion', prmoSchema)

module.exports = Promotion;