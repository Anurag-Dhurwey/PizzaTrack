const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    UserID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    ref: {
      type: String,
      default: "User",
    },
    items:{
        type:Object,
        required:true
    },
    mobile:{
        required:true,
        type:String
    },
    address:{
        required:true,
        type:String
    },
    paymentType:{
      type:String,
      default:"COD"
    }

  },
  { timestamps: true }
);

const Order_model = new mongoose.model("Order", OrderSchema);

module.exports = Order_model;
