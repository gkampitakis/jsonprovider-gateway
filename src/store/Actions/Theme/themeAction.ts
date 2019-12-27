import { createAction } from 'redux-actions';

const ENABLE_DARK_MODE = 'enableDarkMode',
  ENABLE_LIGHT_MODE = 'enableLightMode';

const enableDarkMode = createAction(ENABLE_DARK_MODE, () => ({ selectedTheme: 'darkTheme' }));

const enableLightMode = createAction(ENABLE_LIGHT_MODE, () => ({ selectedTheme: 'lightTheme' }));

export {
  ENABLE_DARK_MODE,
  ENABLE_LIGHT_MODE,
  enableDarkMode,
  enableLightMode
};