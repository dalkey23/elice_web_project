import { model } from "mongoose";
import { UserSchema } from "../schemas/userSchema";

const User = model("Users", UserSchema);

export default User;
