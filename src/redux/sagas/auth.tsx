import { notification } from "antd";
import { call, put, takeEvery } from "redux-saga/effects";
import config from "../../config/config";
import { getApi, postApi, putApi, deleteApi } from "../services/api";
import * as actions from "../actions";
import { get } from "lodash";
// const getToken = (authorization: string) => {
//     const token = authorization.split(" ")[1];
//     return token;
// };

function* resetState(): any {
    put({ type: actions.auth.RESET_STATE });
}

function* login(payload: any): any {
    try {
        let endpoint = `${config.API_URL}/auth/api/v1/authentication/login`;
        const response = yield call(postApi, endpoint, payload.params);
        const authorization = yield response.headers.authorization;
        yield console.log(response.data);
        localStorage.removeItem("userInfo");
        localStorage.removeItem("userToken");
        localStorage.setItem("userInfo", response.data.username);
        localStorage.setItem("userToken", response.data.accessToken);
        yield put({ type: actions.auth.LOGIN_SUCCESS, result: response.data });
        if (payload.callback) {
            payload.callback(response);
        }
    } catch (error) {
        yield put({ type: actions.auth.LOGIN_FAILED, error: error });
        notification.error({
            message: "Thông báo",
            description: "Thông tin đăng nhập không đúng",
        });
    }
}

function* signUp(payload: any): any {
    try {
        let endpoint = `${config.API_URL}/account/api/v1/authentication/register`;
        const response = yield call(postApi, endpoint, payload.params);
        const result = yield response.data;
        yield put({
            type: actions.auth.SIGNUP_SUCCESS,
            result: result,
        });
        if (payload.callback) {
            payload.callback(response);
        }
    } catch (error) {
        yield put({ type: actions.auth.SIGNUP_FAILED, error: error });
        notification.error({
            message: get(
                error,
                "response.data.error",
                "Đăng kí tài khoản đã thất bại"
            ),
        });
    }
}

function* forgetPass(payload: any): any {
    try {
        let endpoint = `${config.API_URL}/account/api/v1/authentication/forgot_password`;

        const response = yield call(postApi, endpoint, payload.params);

        const result = yield response.data;

        yield put({
            type: actions.auth.FORGET_PASS_SUCCESS,
            result: result,
        });
        if (payload.callback) {
            payload.callback(response);
        }
    } catch (error) {
        yield put({
            type: actions.auth.FORGET_PASS_FAILED,
            error: error,
        });
        notification.error({
            message: get(
                error,
                "response.data.error",
                "Email đăng kí không đúng"
            ),
        });
    }
}

function* resetPass(payload: any): any {
    try {
        let endpoint = `${config.API_URL}/account/api/v1/authentication/reset_password`;

        const response = yield call(postApi, endpoint, payload.params);
        const result = yield response;
        yield put({
            type: actions.auth.RESET_PASS_SUCCESS,
            result: result,
        });
        if (payload.callback) {
            payload.callback(result);
        }
    } catch (error) {
        yield put({ type: actions.auth.RESET_PASS_FAILED, error: error });
        notification.error({
            message: get(
                error,
                "response.data.error",
                "Lấy lại mật khẩu thất bại"
            ),
        });
    }
}

export function* loadResetState() {
    yield takeEvery(actions.auth.RESET_STATE, resetState);
}

export function* loadLogin() {
    yield takeEvery(actions.auth.LOGIN, login);
}

export function* loadSignUp() {
    yield takeEvery(actions.auth.SIGNUP, signUp);
}

export function* loadForgetPass() {
    yield takeEvery(actions.auth.FORGET_PASS, forgetPass);
}

export function* loadResetPass() {
    yield takeEvery(actions.auth.RESET_PASS, resetPass);
}
