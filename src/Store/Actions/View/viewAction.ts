import { createAction } from 'redux-actions';

export type TOGGLE_MENU = {
  open: boolean;
}

export const TOGGLE_MENU = 'toggleMenu',
  ENABLE_DARK_MODE = 'enableDarkMode',
  ENABLE_LIGHT_MODE = 'enableLightMode';

export const toggleMenu = createAction(TOGGLE_MENU, (param: boolean) => ({ open: param }));

export const enableDarkMode = createAction(ENABLE_DARK_MODE, () => ({ selectedTheme: 'darkTheme' }));

export const enableLightMode = createAction(ENABLE_LIGHT_MODE, () => ({ selectedTheme: 'lightTheme' }));