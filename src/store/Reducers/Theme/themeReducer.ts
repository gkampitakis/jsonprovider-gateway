import { handleActions, Action, combineActions } from 'redux-actions';
import { enableDarkMode, enableLightMode } from '../../Actions/Theme/themeAction';

export interface ThemeState {
  selectedTheme: 'darkTheme' | 'lightTheme'
}

const defaultState: ThemeState = {
  selectedTheme: 'lightTheme'
}

export const themeReducer = handleActions({
  [combineActions(enableDarkMode, enableLightMode) as any]: (state: any, action: Action<any>) => {
    return { ...state, selectedTheme: action.payload.selectedTheme }
  }
}, defaultState);

