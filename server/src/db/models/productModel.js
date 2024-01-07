import { model } from "mongoose";
import { ProductSchema } from "../schemas/productSchema.cjs";

const Product = model("Products", ProductSchema);

export default Product;
