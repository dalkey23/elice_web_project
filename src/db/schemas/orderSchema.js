const mongoose = require("mongoose");


const autoIncrement = require("mongoose-sequence")(mongoose);
const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    requirement: { type: String },
    orderDate: {
      type: String,
    },

    products: [
      {
        productName: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],

    total: { type: Number },
    date: { type: Date, default: Date.now() },
    orderStatus: {
      type: String,
      required: true,
      default: "상품준비중",
    },
  },
  {
    collection: "orders",
    timestamps: true,
  }
);
OrderSchema.plugin(autoIncrement, { inc_field: "orderId" });
export {OrderSchema};
