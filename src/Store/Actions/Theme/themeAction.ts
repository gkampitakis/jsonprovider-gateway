import { createAction } from 'redux-actions';

export const ENABLE_DARK_MODE = 'enableDarkMode',
  ENABLE_LIGHT_MODE = 'enableLightMode';

export const enableDarkMode = createAction(ENABLE_DARK_MODE, () => ({ selectedTheme: 'darkTheme' }));

export const enableLightMode = createAction(ENABLE_LIGHT_MODE, () => ({ selectedTheme: 'lightTheme' }));