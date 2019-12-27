import { createAction } from 'redux-actions';

export type TOGGLE_MENU = {
  open: boolean;
}

export const TOGGLE_MENU = 'toggleMenu';
//TODO: check if the param is passed
export const toggleMenu = createAction(TOGGLE_MENU, (param: boolean) => ({ open: param }));