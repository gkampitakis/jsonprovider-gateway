import { combineReducers } from 'redux';
import { History } from 'history';
import { themeReducer, ThemeState } from '../Reducers/Theme/themeReducer';
import { connectRouter, RouterState } from "connected-react-router";

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  theme: themeReducer
});

export interface State {
  router?: RouterState,
  theme: ThemeState
}

export default rootReducer;