import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter, RouterState } from "connected-react-router";
import { ViewState, viewReducer } from "./View/viewReducer";
import { AuthState, authReducer } from "./Authorization/authReducer";
import { LoadingState, loadingReducer } from "./Loading/loadingReducer";

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  view: viewReducer,
  authorization: authReducer,
  loading: loadingReducer
});

export interface State {
  router?: RouterState;
  view: ViewState;
  authorization: AuthState;
  loading: LoadingState;
}

export default rootReducer;