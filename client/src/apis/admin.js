import { apiRequest } from "./index";

export const createCategory = async (categoryData) => {
    return await apiRequest(`/categories/add`, "post", categoryData);
};

export const deleteCategory = async (categoryId) => {
    return await apiRequest(`/categories/delete/${categoryId}`, "delete");
};

export const getCategory = async (categoryId) => {
    return await apiRequest(`/categories/${categoryId}`, "get");
};

export const editCategory = async (categoryId, categoryData) => {
    return await apiRequest(
        `/categories/edit/${categoryId}`,
        "post",
        categoryData
    );
};
