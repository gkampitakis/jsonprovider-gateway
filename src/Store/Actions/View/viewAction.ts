import { createAction } from "redux-actions";

export const ENABLE_DARK_MODE = "enableDarkMode",
  ENABLE_LIGHT_MODE = "enableLightMode",
  SET_HEADER_TITLE = "setHeaderTitle";

export type SET_HEADER_TITLE = {
  title: string;
}

export const enableDarkMode = createAction(ENABLE_DARK_MODE, () => {

  localStorage.setItem("theme", "darkTheme");
  return { selectedTheme: "darkTheme" };

}),
  enableLightMode = createAction(ENABLE_LIGHT_MODE, () => {

    localStorage.setItem("theme", "lightTheme");
    return { selectedTheme: "lightTheme" };

  }),
  setHeaderTitle = createAction(SET_HEADER_TITLE, (title: string) => ({
    title
  }));