import { all } from 'redux-saga/effects';
import { loginAsync } from "./Authorization/authSaga";

function* rootSaga() {
  yield all([
    loginAsync()
  ]);
}

export default rootSaga;