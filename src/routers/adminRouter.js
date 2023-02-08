import express from "express";
import { getAdmin, handleOrder, handleChange, handleDelete } from "../services/adminService";

const adminRouter = express.Router();

adminRouter.get("/", getAdmin);
adminRouter.get("/orders", handleOrder);
adminRouter.post("/orders/:orderId", handleChange);
adminRouter.delete("/orders/:orderId", handleDelete);

export default adminRouter;
