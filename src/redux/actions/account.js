export const GET_ACCOUNT = "GET_ACCOUNT";
export const GET_ACCOUNT_SUCCESS = "GET_ACCOUNT_SUCCESS";
export const GET_ACCOUNT_FAILED = "GET_ACCOUNT_FAILED";

export const GET_ACCOUNTS = "GET_ACCOUNTS";
export const GET_ACCOUNTS_SUCCESS = "GET_ACCOUNTS_SUCCESS";
export const GET_ACCOUNTS_FAILED = "GET_ACCOUNTS_FAILED";

export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const CREATE_ACCOUNT_SUCCESS = "CREATE_ACCOUNT_SUCCESS";
export const CREATE_ACCOUNT_FAILED = "CREATE_ACCOUNT_FAILED";

export const EDIT_ACCOUNT = "EDIT_ACCOUNT";
export const EDIT_ACCOUNT_SUCCESS = "EDIT_ACCOUNT_SUCCESS";
export const EDIT_ACCOUNT_FAILED = "EDIT_ACCOUNT_FAILED";

export const DELETE_ACCOUNT = "DELETE_ACCOUNT";
export const DELETE_ACCOUNT_SUCCESS = "DELETE_ACCOUNT_SUCCESS";
export const DELETE_ACCOUNT_FAILED = "DELETE_ACCOUNT_FAILED";

export function getAccount(params, callback) {
    return {
        type: GET_ACCOUNT,
        params,
        callback,
    };
}

export function getAccounts(params, callback) {
    return {
        type: GET_ACCOUNTS,
        params,
        callback,
    };
}

export function createAccount(params, callback) {
    return {
        type: CREATE_ACCOUNT,
        params,
        callback,
    };
}

export function editAccount(params, callback) {
    return {
        type: EDIT_ACCOUNT,
        params,
        callback,
    };
}

export function deleteAccount(params, callback) {
    return {
        type: DELETE_ACCOUNT,
        params,
        callback,
    };
}
