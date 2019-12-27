import { handleActions, Action, combineActions } from 'redux-actions';
import { TOGGLE_MENU } from '../../Actions/View/viewAction';

export interface ViewState { //TODO: this will be expanded
  menu: {
    open: boolean;
  };
}

const defaultState: ViewState = {
  menu: {
    open: false
  }
};

export const viewReducer = handleActions({
  [TOGGLE_MENU]: (state: ViewState, action: Action<TOGGLE_MENU>) => {
    return { ...state, menu: { open: action.payload.open } };
  }
}, defaultState);
