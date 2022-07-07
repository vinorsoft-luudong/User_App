import axios from "axios";
import { IonAlert } from "@ionic/react";

const getHeader = () => {
    const token = localStorage.getItem("userToken");
    return {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    };
};

export function getApiAuth(url: string) {
    return axios({
        method: "get",
        url,
        timeout: 1000 * 60 * 5,
        headers: getHeader(),
    }).catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);

            if (error.response.status === 401) {
                localStorage.removeItem("userToken");
                localStorage.removeItem("userInfo");
                <IonAlert
                    isOpen={true}
                    cssClass="my-custom-class"
                    header={"Thông báo"}
                    message={"Phiên đăng nhập đã hết hạn."}
                    buttons={["OK"]}
                />;
                window.location.replace(`${window.location.origin}/404`);
                return Promise.resolve({});
            }
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
        return Promise.reject(error);
    });
}

export function getApi(url: string) {
    return axios({
        method: "get",
        url,
        timeout: 1000 * 60 * 5,
    }).catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx

            if (error.response.status === 401) {
                localStorage.removeItem("userToken");
                localStorage.removeItem("userInfo");
                <IonAlert
                    isOpen={true}
                    cssClass="my-custom-class"
                    header={"Thông báo"}
                    message={"Phiên đăng nhập đã hết hạn."}
                    buttons={["OK"]}
                />;
                window.location.replace(`${window.location.origin}/404`);
                return Promise.resolve({});
            }
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
        return Promise.reject(error);
    });
}

export function deleteApiAuth(url: string) {
    return axios({
        method: "delete",
        url,
        timeout: 1000 * 60 * 5,
        headers: getHeader(),
    }).catch(function (error) {
        console.log(`API error: ${error}`);
        return Promise.reject(error);
    });
}

export function deleteApi(url: string) {
    return axios({
        method: "delete",
        url,
        timeout: 1000 * 60 * 5,
    }).catch(function (error) {
        console.log(`API error: ${error}`);
        return Promise.reject(error);
    });
}

export function postApi(url: string, data: any) {
    return axios({
        method: "post",
        url,
        timeout: 1000 * 60 * 5,
        data,
    }).catch(function (error) {
        console.log(`API error: ${error}`);
        return Promise.reject(error);
    });
}

export function postApiAuth(url: string, data: any) {
    return axios({
        method: "post",
        url,
        timeout: 1000 * 60 * 5,
        data,
        headers: getHeader(),
    }).catch(function (error) {
        console.log(`API error: ${error}`);
        return Promise.reject(error);
    });
}

export function putApi(url: string, data: any) {
    return axios({
        method: "put",
        url,
        timeout: 1000 * 60 * 5,
        data,
    }).catch(function (error) {
        console.log(`API error: ${error}`);
        return Promise.reject(error);
    });
}

export function putApiAuth(url: string, data: any) {
    return axios({
        method: "put",
        url,
        timeout: 1000 * 60 * 5,
        data,
        headers: getHeader(),
    }).catch(function (error) {
        console.log(`API error: ${error}`);
        return Promise.reject(error);
    });
}
