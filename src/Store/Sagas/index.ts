import { all } from 'redux-saga/effects';
import { loginAsyncSaga } from "./Authorization/authSaga";

function* rootSaga() {
  yield all([
    loginAsyncSaga()
  ]);
}

export default rootSaga;