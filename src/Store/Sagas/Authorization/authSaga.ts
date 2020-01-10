import { put, takeEvery } from 'redux-saga/effects';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, loginSuccess, loginRequest, loginFailure } from '../../Actions/Authorization/authAction';
import { loading } from "../../Actions/Loading/loadingAction";
import { Action } from 'redux-actions';
import { push } from 'connected-react-router';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
//TEMP
//NEEDS implementation even with the dump delay
export function* loginSaga(action: Action<LOGIN_REQUEST>) {

  yield put(loading(true));

  yield delay(3000);
  console.log(action.payload.password);
  console.log(action.payload.username);


  yield put(loginSuccess('1234', '12313'));

  yield put(loading(false)); //Here a try catch and the redirect

  yield put(push("/dashboard"));

  // yield put(loginFailure('Error Message'));
  //TODO: add here also the failed
}


export function* loginAsyncSaga() {

  yield takeEvery(LOGIN_REQUEST, loginSaga);

}

//TODO: login success and login failure and fix the types
//TODO: implement api