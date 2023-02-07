import express from "express";
import { inCategoryAll, findOneProduct, addProduct, editProduct, deleteProduct } from "../services/productService";

const productRouter = express.Router();

productRouter.get("/all/:id", inCategoryAll);
productRouter.get("/:id", findOneProduct);
productRouter.post("/add", addProduct);
productRouter.post("/edit/:id", editProduct);
productRouter.delete("/delete/:id", deleteProduct);

export default productRouter;
