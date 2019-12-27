import { takeEvery } from 'redux-saga/effects';
import { enableDarkMode, enableLightMode, ENABLE_DARK_MODE, ENABLE_LIGHT_MODE } from '../../Actions/Theme/themeAction';

export function* watchEnableDarkMode() {
  yield takeEvery(ENABLE_DARK_MODE, () => enableDarkMode);
}

export function* watchEnableLightMode() {
  yield takeEvery(ENABLE_LIGHT_MODE, () => enableLightMode);
}