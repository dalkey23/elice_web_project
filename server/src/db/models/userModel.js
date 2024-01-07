import { model } from "mongoose";
import UserSchema from "../schemas/userSchema.cjs";

const User = model("users", UserSchema);

export default User;
