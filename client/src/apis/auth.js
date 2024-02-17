import { apiRequest } from "./index";

export const createUser = async (userdata) => {
    try {
        return await apiRequest("/join", "post", userdata);
    } catch (error) {
        throw error; // 에러를 다시 throw하여 호출하는 쪽으로 전파
    }
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
