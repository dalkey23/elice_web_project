import express from "express";
import { postJoin, postLogin } from "../services/userService";

const rootRouter = express.Router();

rootRouter.route("/join").post(postJoin);
rootRouter.route("/login").post(postLogin);

export default rootRouter;
