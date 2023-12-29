import { apiRequest } from "./index";

export const createUser = async (userdata) => {
    return await apiRequest("/join", "post", userdata);
};

export const login = async (userdata) => {
    return await apiRequest(`/login`, "post", userdata);
};

export const getUserInfo = async () => {
    return await apiRequest(`/users/mypage`, "get");
};

export const updateUserInfo = async (userid, userdata) => {
    return await apiRequest(`/users/edit/${userid}`, "post", userdata);
};

export const deleteUser = async (userid, userdata) => {
    return await apiRequest(`/users/delete/${userid}`, "post", userdata);
};