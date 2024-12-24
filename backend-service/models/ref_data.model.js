const mongoose = require('mongoose')

const InventoryTypeSchema = new mongoose.Schema(
  {
    //Product Inventory, Material Inventory 
    InventoryType:{
        type: String,
        required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
)

const ProductForSchema = new mongoose.Schema(
    {
      //Men, Women, Kids
      ProductFor:{
          type: String,
          required: true,
      },
    },
    {
      timestamps: false,
      versionKey: false,
    }
)

const InventoryType = mongoose.model('InventoryType', InventoryTypeSchema)
const ProductFor = mongoose.model('ProductFor', ProductForSchema)

module.exports = {InventoryType, ProductFor};
// module.exports = ProductFor;