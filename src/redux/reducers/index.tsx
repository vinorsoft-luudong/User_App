import { combineReducers } from "redux";

import account from "./account";
import auth from "./auth";
const rootReducer = combineReducers({
    account,
    auth,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
