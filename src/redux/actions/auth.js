export const RESET_STATE = "RESET_STATE";
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const SIGNUP = "SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILED = "GET_ACCOUNTS_FAILED";

export const FORGET_PASS = "FORGET_PASS";
export const FORGET_PASS_SUCCESS = "FORGET_PASS_SUCCESS";
export const FORGET_PASS_FAILED = "FORGET_PASS_FAILED";

export const RESET_PASS = "RESET_PASS";
export const RESET_PASS_SUCCESS = "RESET_PASS_SUCCESS";
export const RESET_PASS_FAILED = "RESET_PASS_FAILED";

export function resetState(params, callback) {
    return {
        type: RESET_STATE,
        params,
        callback,
    };
}
export function login(params, callback) {
    return {
        type: LOGIN,
        params,
        callback,
    };
}

export function signUp(params, callback) {
    return {
        type: SIGNUP,
        params,
        callback,
    };
}

export function forgetPass(params, callback) {
    return {
        type: FORGET_PASS,
        params,
        callback,
    };
}

export function resetPass(params, callback) {
    return {
        type: RESET_PASS,
        params,
        callback,
    };
}
