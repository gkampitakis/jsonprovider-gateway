import { handleActions, Action } from 'redux-actions';
import { LOADING } from '../../Actions/Loading/loadingAction';

export interface LoadingState {
  status: boolean;
}

const defaultState: LoadingState = {
  status: false
};

export const loadingReducer = handleActions({
  [LOADING]: (state: LoadingState, action: Action<LOADING>) => {
    return { ...state, status: action.payload.status };
  }
}, defaultState);