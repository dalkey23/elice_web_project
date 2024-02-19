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

    instance.interceptors.request.use(
        request => {
          const accessToken = localStorage.getItem('accessToken');
          // 요청을 보내기 전에 localStorage에서 'accessToken'이 있다면
          if (accessToken)
            // 요청 헤더에 'Authorization' 헤더로 추가
            request.headers.Authorization = accessToken;
          return request;
        },
        error => {
          return Promise.reject(error);
        }
      );

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
      throw error
    }
};
