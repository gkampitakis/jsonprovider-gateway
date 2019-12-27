import { all } from 'redux-saga/effects';
import { watchEnableDarkMode, watchEnableLightMode } from './Theme/themeSaga';

function* rootSaga() {
  yield all([
    watchEnableDarkMode(),
    watchEnableLightMode()
  ]);
}

export default rootSaga;