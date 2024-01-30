import { apiRequest } from "./index";

export const getCategories = async () => {
    return await apiRequest(`/categories`, "get");
};

export const getProductList = async (categoryId) => {
    return await apiRequest(`/products/all/${categoryId}`, "get");
};

export const getItem = async (id) => {
    return await apiRequest(`/products/${id}`, "get");
};
