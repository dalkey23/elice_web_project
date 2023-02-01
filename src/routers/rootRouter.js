import express from "express";
import { postJoin, postLogin } from "../services/userService";

const rootRouter = express.Router();

rootRouter.post("/join", postJoin);
rootRouter.post("/login", postLogin);

export default rootRouter;
