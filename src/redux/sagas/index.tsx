import { all } from "redux-saga/effects";

import {
    loadAccount,
    loadAccounts,
    loadAddAccount,
    loadDeleteAccount,
    loadEditAccount,
} from "./account";
import {
    loadResetState,
    loadLogin,
    loadSignUp,
    loadForgetPass,
    loadResetPass,
} from "./auth";
export default function* rootSaga() {
    yield all([
        // account
        loadAccount(),
        loadAccounts(),
        loadAddAccount(),
        loadDeleteAccount(),
        loadEditAccount(),
        loadResetState(),
        loadLogin(),
        loadSignUp(),
        loadForgetPass(),
        loadResetPass(),
    ]);
}
