const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema(
  {
    ProductName:{
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    Brand:{
        type: String,
        required: true,
    },
    Image: {
      type: String,
      required: true,
    },
    //Product Inventory, Material Inventory 
    InventoryType:{
        type: String,
        // trim: true,
        // ref: 'InventoryType', 
        required: true,
    },
    //Men, Women, Kids
    ProductFor:{
        type: String,
        // trim: true,
        // ref: 'ProductFor', 
        required: true,
    },
    isAvailable:{
        type: String,
        required: true,
    }
  },
  {
    timestamps: false,
    versionKey: false,
    id: true,
    toJSON: {
      transform(doc, ret){
        ret.id = ret._id
        delete ret._id
      }
    }
  }
)

const Inventory = mongoose.model('Inventory', inventorySchema)

module.exports = Inventory;