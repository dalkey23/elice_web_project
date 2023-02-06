import { Schema, mongoose } from "mongoose";

const autoIncrement = require("mongoose-sequence")(mongoose);
const OrderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,

      ref: "User",
    },
    name: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    requirement: { type: String },
    orderDate: {
      type: String,
    },

    //product 어떻게 할지 한번 생각해보기
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
export default OrderSchema;
