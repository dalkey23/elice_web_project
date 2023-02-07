import express from "express";
import { postJoin, postLogin } from "../services/userService";
import { postOrder } from "../services/orderService";
import { loginRequired } from "../middlewares/loginrequired";

const rootRouter = express.Router();

rootRouter.post("/join", postJoin);
rootRouter.post("/login", postLogin);
rootRouter.post("/order", loginRequired, postOrder);

export default rootRouter;
