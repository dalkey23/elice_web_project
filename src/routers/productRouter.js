import express from "express";
import { showAllProducts, findOneProduct, registProduct, updateProduct, deleteProduct } from "../services/productService";

const productRouter = express.Router();

productRouter.get("/products", showAllProducts);
productRouter.get("/products/:shortId", findOneProduct);
productRouter.post("/products/regist", registProduct);
productRouter.post("/products/:shortId", updateProduct);
productRouter.delete("/products:shortId", deleteProduct);

export default productRouter;
