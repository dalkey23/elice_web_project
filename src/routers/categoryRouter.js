import express from "express";
import { showAllCategories, findOneCategory, addCategory, editCategory, deleteCategory } from "../services/categoryService";

const categoryRouter = express.Router();

// categoryRouter.get("/all/:id", showAllCategories);
// categoryRouter.get("/:name", findOneCategory);
categoryRouter.post("/add", addCategory);
categoryRouter.post("/edit/:id", editCategory);
// categoryRouter.delete("/delete/:id", deleteCategory);

export default categoryRouter;
