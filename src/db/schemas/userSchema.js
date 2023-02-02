import { Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    name: { type: String, unique: true },
    password: { type: String },
    email: { type: String, unique: true },
    phoneNumber: { type: String, unique: true },
    address: { type: String },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export default UserSchema;
