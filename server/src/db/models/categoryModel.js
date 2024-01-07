import { model } from "mongoose";
import { CategorySchema } from "../schemas/categorySchema.cjs";

const Category = model("Categories", CategorySchema);

export default Category;