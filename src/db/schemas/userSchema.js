import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, unique: true },
    address: { type: String },
  },
  { timestamps: true }
);

export { UserSchema };
