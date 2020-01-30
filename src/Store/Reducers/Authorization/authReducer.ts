import { handleActions, Action } from 'redux-actions';
import { LOGIN_SUCCESS, LOGOUT, LOGIN_FAILURE } from '../../Actions/Authorization/authAction';
import { Authorization } from '../../../Api';

export interface AuthState {
  authorized: boolean;
  userId: string;
  token: string;
  errorMessage: string;
}

const defaultState: AuthState = {
  authorized: !!localStorage.getItem("token"),
  userId: localStorage.getItem("userId") || "",
  token: localStorage.getItem("token") || "",
  errorMessage: ''
};

export const authReducer = handleActions({
  [LOGIN_SUCCESS]: loginSuccessReducer,
  [LOGOUT]: logoutReducer,
  [LOGIN_FAILURE]: loginFailureReducer
}, defaultState);


function loginSuccessReducer(state: AuthState, action: Action<LOGIN_SUCCESS>) {
  return { ...state, authorized: true, token: action.payload.token, userId: action.payload.userId };
}

function logoutReducer(state: AuthState, action: Action<LOGOUT>) {
  //TODO: send request to remove the token
  Authorization.logoutUser();
  return { ...state, authorized: false, token: '', userId: '' };
}

function loginFailureReducer(state: AuthState, action: Action<LOGIN_FAILURE>) {
  return { ...state, authorized: false, token: '', userId: '', errorMessage: action.payload.errorMessage };
}
