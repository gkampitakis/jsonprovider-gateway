import { Authorization } from '../../../Api';
import { put, takeEvery, call } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess } from '../../Actions/Authorization/authAction';
import { loading } from "../../Actions/Loading/loadingAction";
import { Action } from 'redux-actions';
import { push } from 'connected-react-router';

// const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export function* loginSaga(action: Action<LOGIN_REQUEST>) {

  yield put(loading(true));

  const { password, email } = action.payload;

  try {

    const { token, userId } = yield call(Authorization.loginRequest, email, password);

    yield put(loginSuccess(token, userId));

    Authorization.saveLocalstorage(token, userId);

    yield put(push("/dashboard"));

  } catch (error) {

    console.log(error);
    //FIXME:
    // yield put(loginFailure('Error Message'));
  } finally {

    yield put(loading(false));

  }


}


export function* loginAsyncSaga() {

  yield takeEvery(LOGIN_REQUEST, loginSaga);

}

//TODO: login success and login failure and fix the types
//TODO: implement api