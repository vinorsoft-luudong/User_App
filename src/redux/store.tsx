import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger, { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware, createLogger()),
        applyMiddleware(logger)
    )
);

sagaMiddleware.run(rootSaga);

export default store;
