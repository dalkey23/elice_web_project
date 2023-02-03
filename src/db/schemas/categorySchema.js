const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);


const CategorySchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    imgUrl: { type: String },
  },
  { timestamps: true }
);
ProductSchema.plugin(AutoIncrement, { inc_field: "id" });
export { CategorySchema };
