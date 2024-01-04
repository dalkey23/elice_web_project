import express from "express";
import { inCategoryAll, findOneProduct, addProduct, editProduct, deleteProduct } from "../services/productService.js";
import { adminOnly } from "../middlewares/adminRequired.js"

const productRouter = express.Router();

productRouter.get("/all/:categoryId", inCategoryAll);
productRouter.get("/:id", findOneProduct);
productRouter.post("/add",  adminOnly,addProduct);
productRouter.post("/edit/:id", adminOnly, editProduct);
productRouter.delete("/delete/:id", adminOnly, deleteProduct);

export default productRouter;
