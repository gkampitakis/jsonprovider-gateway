import { all } from 'redux-saga/effects';
import { Dispatch } from 'redux';
import { loginAsyncSaga } from "./Authorization/authSaga";

function* rootSaga(dispatch: Dispatch) {
  yield all([
    loginAsyncSaga(dispatch)
  ]);
}

export default rootSaga;