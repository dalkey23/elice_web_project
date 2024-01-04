import { model } from "mongoose";
import { ProductSchema } from "../schemas/productSchema.js";

const Product = model("Products", ProductSchema);

export default Product;
