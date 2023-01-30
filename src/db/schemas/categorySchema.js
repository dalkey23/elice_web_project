import { Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export { CategorySchema };
