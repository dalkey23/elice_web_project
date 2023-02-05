import { Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    userId: {
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
    //product 어떻게 할지 한번 생각해보기
    product: {},
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

export default OrderSchema;
