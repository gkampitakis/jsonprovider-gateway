import { put, takeEvery } from 'redux-saga/effects';
import { LOGIN_ASYNC, LOGIN, login } from '../../Actions/Authorization/authAction';
import { loading } from "../../Actions/Loading/loadingAction";
import { Action } from 'redux-actions';
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
//TEMP

export function* loginSaga(action: Action<LOGIN_ASYNC>) {
  yield put(loading(true));

  yield delay(3000);
  console.log(action.payload.password);
  console.log(action.payload.username);


  yield put(login('1234', '12313'));
  yield put(loading(false));

  //TODO: add here also the failed
}


export function* loginAsyncSaga() {

  yield takeEvery(LOGIN_ASYNC, loginSaga);

}

//TODO: login success and login failure and fix the types
//TODO: implement api