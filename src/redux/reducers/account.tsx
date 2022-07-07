import * as accountActions from '../actions/account';

const initState = {
    item: {
        loading: false,
        result: {},
        error: null,
    },
    list: {
        loading: false,
        result: {},
        error: null,
    }
}

export default function accountReducer(state = initState, action: any) {
    switch(action.type) {
        // get a account
        case accountActions.GET_ACCOUNT:
            return {
                ...state,
                item: { ...state.item, loading: true },
            };
        case accountActions.GET_ACCOUNT_SUCCESS:
            return {
                ...state,
                item: { ...state.item, loading: false, result: action.result },
            };
        case accountActions.GET_ACCOUNT_FAILED:
            return {
                ...state,
                item: { ...state.item, loading: false, error: action.error },
            }
        // get accounts
        case accountActions.GET_ACCOUNTS:
            return {
                ...state,
                list: { ...state.list, loading: true },
            };
        case accountActions.GET_ACCOUNTS_SUCCESS:
            return {
                ...state,
                list: { ...state.list, loading: false, result: action.result },
            };
        case accountActions.GET_ACCOUNTS_FAILED:
            return {
                ...state,
                list: { ...state.list, loading: false, error: action.error },
            }
        // create account
        case accountActions.CREATE_ACCOUNT:
            return {
                ...state,
                item: { ...state.item, loading: true },
            };
        case accountActions.CREATE_ACCOUNT_SUCCESS:
            return {
                ...state,
                item: { ...state.item, loading: false, result: action.result },
            };
        case accountActions.CREATE_ACCOUNT_FAILED:
            return {
                ...state,
                item: { ...state.item, loading: false, error: action.error },
            }  
        // edit account
        case accountActions.EDIT_ACCOUNT:
            return {
                ...state,
                item: { ...state.item, loading: true },
            };
        case accountActions.EDIT_ACCOUNT_SUCCESS:
            return {
                ...state,
                item: { ...state.item, loading: false, result: action.result },
            };
        case accountActions.EDIT_ACCOUNT_FAILED:
            return {
                ...state,
                item: { ...state.item, loading: false, error: action.error },
            }
        // delete account
        case accountActions.DELETE_ACCOUNT:
            return {
                ...state,
                item: { ...state.item, loading: true },
            };
        case accountActions.DELETE_ACCOUNT_SUCCESS:
            return {
                ...state,
                item: { ...state.item, loading: false, result: action.result },
            };
        case accountActions.DELETE_ACCOUNT_FAILED:
            return {
                ...state,
                item: { ...state.item, loading: false, error: action.error },
            }
        default:
            return state;
    }
}