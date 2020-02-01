import { createAction } from 'redux-actions';

export type LOGIN_SUCCESS = {
  token: string;
  userId: string;
}

export type LOGIN_REQUEST = {
  email: string;
  password: string;
}

export type LOGIN_FAILURE = {
  errorMessage: string;
}

export type LOGOUT = {};

export const LOGIN_SUCCESS = 'loginSuccess',
  LOGIN_REQUEST = 'loginRequest',
  LOGIN_FAILURE = 'loginFailure',
  LOGOUT = 'logout';

export const loginRequest = createAction(LOGIN_REQUEST, (email: string, password: string) => ({ email, password })),
  loginSuccess = createAction(LOGIN_SUCCESS, (token: string, userId: string) => ({ token, userId })),
  logout = createAction(LOGOUT),
  loginFailure = createAction(LOGIN_FAILURE, (message: string) => ({ message }));