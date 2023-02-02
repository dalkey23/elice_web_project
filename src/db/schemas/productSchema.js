import { Schema } from "mongoose";
// import { shortId } from "./types/shortId";

const ProductSchema = new Schema(
  {
    // shortId,
    productName: { type: String },
    categoryId: { type: String },
    manufacturer: { type: String },
    shortDesc: { type: String },
    detailDesc: { type: String },
    imgUrl: { type: String },
    totalstocks: { type: Number },
    price: { type: Number },
    searchKeywords: { type: String },
  },
  { timestamps: true }
);

export { ProductSchema };
