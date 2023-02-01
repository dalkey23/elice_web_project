import express from "express";
import { changeUser } from "../services/userService";

const userRouter = express.Router();

userRouter.post("/edit", changeUser);

export default userRouter;
