import express from "express";
import { postJoin, postLogin } from "../services/userService.js";
import { postOrder } from "../services/orderService.js";
import { loginRequired } from "../middlewares/loginrequired.js";

const rootRouter = express.Router();

rootRouter.get("/", function(req, res, next) {
    res.send("server is running")
});
rootRouter.post("/join", postJoin);
rootRouter.post("/login", postLogin);
rootRouter.post("/order", loginRequired, postOrder);

export default rootRouter;
