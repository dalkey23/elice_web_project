import express from "express";
import { showAllCategories, findOneCategory, addCategory, editCategory, deleteCategory } from "../services/categoryService";

const categoryRouter = express.Router();

categoryRouter.get("/", showAllCategories);
categoryRouter.get("/:name", findOneCategory);
categoryRouter.post("/add", addCategory);
categoryRouter.post("/edit/:categoryId", editCategory);
categoryRouter.delete("/delete/:categoryId", deleteCategory);

export default categoryRouter;
