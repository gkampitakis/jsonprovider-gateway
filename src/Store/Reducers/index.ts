import { combineReducers } from 'redux';
import { History } from 'history';
import { themeReducer, ThemeState } from './Theme/themeReducer';
import { connectRouter, RouterState } from "connected-react-router";
import { ViewState, viewReducer } from "./View/viewReducer";

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  theme: themeReducer,
  view: viewReducer
});

export interface State {
  router?: RouterState;
  theme: ThemeState;
  view: ViewState;
}

export default rootReducer;