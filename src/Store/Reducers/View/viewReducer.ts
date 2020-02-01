import { handleActions, Action, combineActions } from 'redux-actions';
import { enableDarkMode, enableLightMode, SET_HEADER_TITLE } from '../../Actions/View/viewAction';

export interface ViewState { //TODO: this will be expanded
  selectedTheme: 'darkTheme' | 'lightTheme';
  headerTitle: string;
}

const defaultState: ViewState = {
  selectedTheme: localStorage.getItem("theme") as 'darkTheme' | 'lightTheme' || 'lightTheme',
  headerTitle: 'Login'
};

export const viewReducer = handleActions({
  [SET_HEADER_TITLE]: setHeaderTitleReducer,
  [combineActions(enableDarkMode, enableLightMode) as any]: (state: ViewState, action: Action<any>) => {
    return { ...state, selectedTheme: action.payload.selectedTheme };
  }
}, defaultState);

function setHeaderTitleReducer(state: ViewState, action: Action<SET_HEADER_TITLE>) {

  return { ...state, headerTitle: action.payload.title };

}
