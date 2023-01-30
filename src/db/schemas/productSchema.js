import { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    productName: { type: String, required: true },
    categoryId: { required: true },
    manufacturer: { type: String },
    shortDesc: { type: String },
    detailDesc: { type: String, required: true },
    imgUrl: { type: String, required: true },
    totalstocks: { type: Number, required: true },
    price: { type: Number, required: true },
    searchKeywords: { type: String },
    sku: { type: String },
  },
  { timestamps: true }
);

export { ProductSchema };
