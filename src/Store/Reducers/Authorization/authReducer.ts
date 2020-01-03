import { handleActions, Action } from 'redux-actions';
import { LOGIN, LOGOUT } from '../../Actions/Authorization/authAction';

export interface AuthState {
  authorized: boolean;
  userId: string;
  token: string;
}

const defaultState: AuthState = {
  authorized: false,
  userId: '',
  token: ''
};

export const authReducer = handleActions({
  [LOGIN]: (state: AuthState, action: Action<LOGIN>) => {
    return { ...state, authorized: true, token: action.payload.token, userId: action.payload.userId };
  },
  [LOGOUT]: (state: AuthState, action: Action<LOGOUT>) => {
    return { ...state, authorized: false, token: '', userId: '' };
  }
}, defaultState);