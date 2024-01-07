import {model} from "mongoose";
import {OrderSchema} from "../schemas/orderSchema.cjs";

const Order = model("orders", OrderSchema);

export default Order;
