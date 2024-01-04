import { model } from "mongoose";
import { CategorySchema } from "../schemas/categorySchema.js";

const Category = model("Categories", CategorySchema);

export default Category;