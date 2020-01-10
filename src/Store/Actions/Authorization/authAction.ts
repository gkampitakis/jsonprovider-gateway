import { createAction } from 'redux-actions';

export type LOGIN_SUCCESS = {
  token: string;
  userId: string;
}

export type LOGIN_REQUEST = {
  username: string;
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

export const loginSuccess = createAction(LOGIN_SUCCESS, (token: string, userId: string) => {
  localStorage.setItem('token', token);
  localStorage.setItem('userId', userId);//TODO: evaluate this probably should go to the API
  return {
    token,
    userId
  };
});

export const loginRequest = createAction(LOGIN_REQUEST, (username: string, password: string) => ({ username, password }));

export const logout = createAction(LOGOUT);

export const loginFailure = createAction(LOGIN_FAILURE, (message: string) => ({ message }));

//TODO: how from login success to redirect to dashboard