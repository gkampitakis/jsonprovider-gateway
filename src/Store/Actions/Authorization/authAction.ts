import { createAction } from 'redux-actions';

export type LOGIN = {
  token: string;
  userId: string;
}

export type LOGIN_ASYNC = {
  username: string;
  password: string;
}

export type LOGOUT = {};

export const LOGIN = 'login',
  LOGIN_ASYNC = 'loginAsync',
  LOGOUT = 'logout';

export const login = createAction(LOGIN, (token: string, userId: string) => {
  localStorage.setItem('token', token);
  localStorage.setItem('userId', userId);//TODO: evaluate
  return {
    token,
    userId
  };
});

export const loginAsync = createAction(LOGIN_ASYNC, (username: string, password: string) => ({ username, password }));

export const logout = createAction(LOGOUT);