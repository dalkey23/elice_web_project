import { model } from "mongoose";
import OrderSchema from "../schemas/OrderSchema";

const Order = model("orders", OrderSchema);

export default Order;
