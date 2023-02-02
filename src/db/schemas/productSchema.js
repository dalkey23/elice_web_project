import { Schema } from "mongoose";
// import { shortId } from "./types/shortId";

const ProductSchema = new Schema(
  {
    // shortId,
    productName: { type: String, required: true },
    categoryId: { type: String, required: true },
    manufacturer: { type: String },
    shortDesc: { type: String },
    detailDesc: { type: String, required: true },
    imgUrl: { type: String, required: true },
    totalstocks: { type: Number },
    price: { type: Number, required: true },
    searchKeywords: { type: String },
  },
  { timestamps: true }
);

export { ProductSchema };
