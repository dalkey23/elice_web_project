import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);

export { UserSchema };
