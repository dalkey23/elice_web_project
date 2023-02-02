import express from "express";
import { changeUser, seeMyPage, logOut, deleteUser } from "../services/userService";
import { loginRequired } from "../middlewares/loginRequired.js";

const userRouter = express.Router();

userRouter.get("/logout", logOut);
userRouter.get("/myPage", loginRequired, seeMyPage);
userRouter.post("/myPage/edit", loginRequired, changeUser);
userRouter.delete("/myPage/delete", deleteUser);

export default userRouter;
