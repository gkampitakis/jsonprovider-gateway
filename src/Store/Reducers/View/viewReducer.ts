import { handleActions, Action, combineActions } from 'redux-actions';
import { enableDarkMode, enableLightMode } from '../../Actions/View/viewAction';

export interface ViewState { //TODO: this will be expanded
  selectedTheme: 'darkTheme' | 'lightTheme';
}

const defaultState: ViewState = {
  selectedTheme: localStorage.getItem("theme") as 'darkTheme' | 'lightTheme' || 'lightTheme'
};

export const viewReducer = handleActions({
  [combineActions(enableDarkMode, enableLightMode) as any]: (state: ViewState, action: Action<any>) => {
    return { ...state, selectedTheme: action.payload.selectedTheme };
  }
}, defaultState);
