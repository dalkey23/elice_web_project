import express from "express";
import { postJoin, postLogin } from "../services/userService";
import { postOrder } from "../services/paymentService";

const rootRouter = express.Router();

rootRouter.post("/join", postJoin);
rootRouter.post("/login", postLogin);
rootRouter.post("/order", postOrder);

export default rootRouter;
