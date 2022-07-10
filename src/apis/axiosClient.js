import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    //hanlde tooken...
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
        config.headers.authorization = `Bearer: ${accessToken}`;
    }

    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        //hanlde errors
        throw error;
    }
);

export default axiosClient;
