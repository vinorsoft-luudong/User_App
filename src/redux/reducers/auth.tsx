import * as authActions from "../actions/auth";

const initState = {
    item: {
        loading: false,
        result: {},
        error: null,
    },
};

export default function authReducer(state = initState, action: any) {
    switch (action.type) {
        case authActions.RESET_STATE:
            return initState;

        // get a account
        case authActions.LOGIN:
            return {
                ...state,
                item: { ...state.item, loading: true },
            };
        case authActions.LOGIN_SUCCESS:
            return {
                ...state,
                item: { ...state.item, loading: false, result: action.result },
            };
        case authActions.LOGIN_FAILED:
            return {
                ...state,
                item: { ...state.item, loading: false, error: action.error },
            };
        // get accounts
        case authActions.SIGNUP:
            return {
                ...state,
                item: { ...state.item, loading: true },
            };
        case authActions.SIGNUP_SUCCESS:
            return {
                ...state,
                item: { ...state.item, loading: false, result: action.result },
            };
        case authActions.SIGNUP_FAILED:
            return {
                ...state,
                item: { ...state.item, loading: false, error: action.error },
            };
        // forget pass
        case authActions.FORGET_PASS:
            return {
                ...state,
                item: { ...state.item, loading: true },
            };
        case authActions.FORGET_PASS_SUCCESS:
            return {
                ...state,
                item: { ...state.item, loading: false, result: action.result },
            };
        case authActions.FORGET_PASS_FAILED:
            return {
                ...state,
                item: { ...state.item, loading: false, error: action.error },
            };
        // edit account
        case authActions.RESET_PASS:
            return {
                ...state,
                item: { ...state.item, loading: true },
            };
        case authActions.RESET_PASS_SUCCESS:
            return {
                ...state,
                item: { ...state.item, loading: false, result: action.result },
            };
        case authActions.RESET_PASS_FAILED:
            return {
                ...state,
                item: { ...state.item, loading: false, error: action.error },
            };
        // delete account

        default:
            return state;
    }
}
