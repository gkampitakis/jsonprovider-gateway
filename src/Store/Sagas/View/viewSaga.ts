import { takeEvery } from 'redux-saga/effects';
import { toggleMenu, TOGGLE_MENU } from '../../Actions/View/viewAction';

export function* watchToggleMenu() {
  //TODO: check the param is passed here

  yield takeEvery(TOGGLE_MENU, () => toggleMenu);
}