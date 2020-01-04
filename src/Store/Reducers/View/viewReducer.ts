import { handleActions, Action, combineActions } from 'redux-actions';
import { TOGGLE_MENU, enableDarkMode, enableLightMode } from '../../Actions/View/viewAction';

export interface ViewState { //TODO: this will be expanded
  menu: {
    open: boolean;
  };
  selectedTheme: 'darkTheme' | 'lightTheme';
}

const defaultState: ViewState = {
  menu: {
    open: false
  },
  selectedTheme: 'lightTheme' //'darkTheme'
};

export const viewReducer = handleActions({
  [TOGGLE_MENU]: (state: ViewState, action: Action<TOGGLE_MENU>) => {
    return { ...state, menu: { open: action.payload.open } };
  },
  [combineActions(enableDarkMode, enableLightMode) as any]: (state: ViewState, action: Action<any>) => {
    return { ...state, selectedTheme: action.payload.selectedTheme };
  }
}, defaultState);
