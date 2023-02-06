import express from "express";
import { showAllProducts, findOneProduct, addProduct, editProduct, deleteProduct } from "../services/productService";

const productRouter = express.Router();

productRouter.get("/all/:id", showAllProducts);
productRouter.get("/:name", findOneProduct);
productRouter.post("/add", addProduct);
productRouter.post("/edit/:id", editProduct);
productRouter.delete("/delete/:id", deleteProduct);

export default productRouter;
