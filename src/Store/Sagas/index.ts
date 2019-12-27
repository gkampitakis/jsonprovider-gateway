import { all } from 'redux-saga/effects';
import { watchEnableDarkMode, watchEnableLightMode } from './Theme/themeSaga';
import { watchToggleMenu } from "./View/viewSaga";

function* rootSaga() {
  yield all([
    watchEnableDarkMode(),
    watchEnableLightMode()
    // watchToggleMenu() //NOTE: think this is not needed
  ]);
}

export default rootSaga;