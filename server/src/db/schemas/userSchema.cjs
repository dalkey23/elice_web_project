const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const UserSchema = new mongoose.Schema(
    {
        name: { type: String },
        password: { type: String },
        email: { type: String, unique: true },
        phoneNumber: { type: String },
        address: { type: String },
        order: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "Order",
            default: [],
        },

        role: {
            type: String,
            default: "user",
        },
    },
    { timestamps: true, collection: "users" }
);
UserSchema.plugin(AutoIncrement, { inc_field: "userId" });
module.exports = { UserSchema };
//export default UserSchema;
