import { createAction } from "redux-actions";

export const ENABLE_DARK_MODE = "enableDarkMode",
  ENABLE_LIGHT_MODE = "enableLightMode";

export const enableDarkMode = createAction(ENABLE_DARK_MODE, () => {

  localStorage.setItem("theme", "darkTheme");
  return { selectedTheme: "darkTheme" };

});

export const enableLightMode = createAction(ENABLE_LIGHT_MODE, () => {

  localStorage.setItem("theme", "lightTheme");
  return { selectedTheme: "lightTheme" };

});