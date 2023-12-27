import axios from "axios";

const getAxiosInstance = () => {
    const baseURL = process.env.REACT_APP_API_URL;

    const config = {
        baseURL: `${baseURL}/api`,
        headers: {
            "Content-Type": "application/json",
        },
    };

    const instance = axios.create(config);

    return instance;
};

const axiosInstance = getAxiosInstance();

// api 함수 간소화
export const apiRequest = async (url, method, data) => {
    try {
        const response = await axiosInstance.request({
            url,
            method,
            data,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};
