import axiosClient from "./axiosClient";

const auth = {
    login: async (params) => {
        console.log("login");
        const url = `api/auth/login`;
        return axiosClient.post(url, params);
    },
    register: async (params) => {
        const url = `api/auth/register`;
        return axiosClient.post(url, params);
    },
};

export default auth;
