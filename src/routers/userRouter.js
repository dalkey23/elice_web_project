import express from "express";
import { changeUser, seeMyPage, logOut } from "../services/userService";
import { loginRequired } from "../middlewares/loginRequired.js";

const userRouter = express.Router();

userRouter.get("/logout", logOut);
userRouter.get("/:id", loginRequired, seeMyPage);
userRouter.post("/edit", loginRequired, changeUser);

export default userRouter;
