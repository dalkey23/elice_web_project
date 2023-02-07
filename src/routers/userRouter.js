import express from "express";
import { changeUser, seeMyPage, deleteUser } from "../services/userService";

import { getOrder, deleteOrder } from "../services/orderService";
import { loginRequired } from "../middlewares/loginRequired.js";

const userRouter = express.Router();

userRouter.get("/myPage", loginRequired, seeMyPage);
userRouter.get("/orders", getOrder);
userRouter.get("/orders/:orderId", deleteOrder);
userRouter.post("/edit/:userId", loginRequired, changeUser);
userRouter.delete("/delete/:userId", deleteUser);

export default userRouter;
