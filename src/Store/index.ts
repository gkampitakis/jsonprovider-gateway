import { createBrowserHistory, History } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./Reducers";
import rootSaga from "./Sagas";

const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const history: History = createBrowserHistory();

export const store = createStore(
  rootReducer(history),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    ),
  ),
);

sagaMiddleware.run(rootSaga);

// TODO: handle Login
// TODO: spike on how to load data from local storage or on init