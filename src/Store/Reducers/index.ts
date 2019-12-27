import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter, RouterState } from "connected-react-router";
import { ViewState, viewReducer } from "./View/viewReducer";

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  view: viewReducer
});

export interface State {
  router?: RouterState;
  view: ViewState;
}

export default rootReducer;