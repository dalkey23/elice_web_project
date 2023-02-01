import { model } from "mongoose";
import UserSchema from "../schemas/userSchema";

const User = model("User", UserSchema);

export default User;
