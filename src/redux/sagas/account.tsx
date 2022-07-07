import { notification } from "antd";
import { call, put, takeEvery } from "redux-saga/effects";
import config from "../../config/config";
import {
    getApi,
    getApiAuth,
    postApiAuth,
    putApiAuth,
    deleteApiAuth,
} from "../services/api";
import * as actions from "../actions";
import { get } from "lodash";

function* fetchAccounts(payload: any): any {
    try {
        let endpoint = `${config.API_URL}/account/api/v1/accounts`;
        const response = yield call(getApiAuth, endpoint);
        console.log("response", response);
        const result = yield response.data;
        yield put({
            type: actions.account.GET_ACCOUNTS_SUCCESS,
            result: result,
        });
        if (payload.callback) {
            payload.callback(result);
        }
    } catch (error) {
        yield put({ type: actions.account.GET_ACCOUNTS_FAILED, error: error });
        notification.error({
            message: get(
                error,
                "response.data.error",
                "Tải dữ liệu người dùng đã thất bại"
            ),
        });
    }
}

function* fetchAccount(payload: any): any {
    try {
        let endpoint = `${config.API_URL}/account/api/v1/accounts/${payload.params.id}`;
        const response = yield call(getApiAuth, endpoint);
        const result = yield response.data;
        yield put({
            type: actions.account.GET_ACCOUNT_SUCCESS,
            result: result,
        });
        if (payload.callback) {
            payload.callback(result);
        }
    } catch (error) {
        yield put({ type: actions.account.GET_ACCOUNT_FAILED, error: error });
        notification.error({
            message: get(
                error,
                "response.data.error",
                "Tải dữ liệu người dùng đã thất bại"
            ),
        });
    }
}

function* createAccount(payload: any): any {
    try {
        let endpoint = config.API_URL + "/account/api/v1/accounts";
        const response = yield call(postApiAuth, endpoint, payload.params);
        const result = yield response;
        yield put({
            type: actions.account.CREATE_ACCOUNT_SUCCESS,
            result: result,
        });
        if (payload.callback) {
            payload.callback(result);
        }
    } catch (error) {
        yield put({
            type: actions.account.CREATE_ACCOUNT_FAILED,
            error: error,
        });
        notification.error({
            message: get(
                error,
                "response.data.error",
                "Thêm người dùng mới thất bại"
            ),
        });
    }
}

function* editAccount(payload: any): any {
    try {
        let endpoint =
            config.API_URL + `/account/api/v1/accounts/${payload.params.id}`;
        const response = yield call(
            putApiAuth,
            endpoint,
            payload.params.formData
        );
        const result = yield response;
        yield put({
            type: actions.account.EDIT_ACCOUNT_SUCCESS,
            result: result,
        });
        if (payload.callback) {
            payload.callback(result);
        }
    } catch (error) {
        yield put({ type: actions.account.EDIT_ACCOUNT_FAILED, error: error });
        notification.error({
            message: get(
                error,
                "response.data.error",
                "Cập nhật thông tin người dùng thất bại"
            ),
        });
    }
}

function* deleteAccount(payload: any): any {
    try {
        let endpoint =
            config.API_URL + `/account/api/v1/accounts/${payload.params.id}`;
        const response = yield call(deleteApiAuth, endpoint);
        const result = yield response;
        yield put({
            type: actions.account.DELETE_ACCOUNT_SUCCESS,
            result: result,
        });
        if (payload.callback) {
            payload.callback(result);
        }
    } catch (error) {
        yield put({
            type: actions.account.DELETE_ACCOUNT_FAILED,
            error: error,
        });
        notification.error({
            message: get(
                error,
                "response.data.error",
                "Xóa người dùng thất bại"
            ),
        });
    }
}

export function* loadAccount() {
    yield takeEvery(actions.account.GET_ACCOUNT, fetchAccount);
}

export function* loadAccounts() {
    yield takeEvery(actions.account.GET_ACCOUNTS, fetchAccounts);
}

export function* loadAddAccount() {
    yield takeEvery(actions.account.CREATE_ACCOUNT, createAccount);
}

export function* loadEditAccount() {
    yield takeEvery(actions.account.EDIT_ACCOUNT, editAccount);
}

export function* loadDeleteAccount() {
    yield takeEvery(actions.account.DELETE_ACCOUNT, deleteAccount);
}
