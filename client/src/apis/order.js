import { apiRequest } from "./index";

export const createOrder = async (orderdata) => {
    return await apiRequest("/order", "post", orderdata);
};

export const getUserOrderList = async () => {
    return await apiRequest("/users/orders", "get");
};
