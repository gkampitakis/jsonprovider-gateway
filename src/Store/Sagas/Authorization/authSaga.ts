import { Authorization } from '../../../Api';
import { put, takeEvery, call } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess } from '../../Actions/Authorization/authAction';
import { loading } from '../../Actions/Loading/loadingAction';
import { Action } from 'redux-actions';
import { push } from 'connected-react-router';
import { enqueueNotification, closeNotification } from '../../Actions/Notifications/notificationsAction';
import { NotificationFactory } from '../../../Components/Utils/Notifier/NotificationFactory';
import { Dispatch } from 'redux';

// const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

function* loginSaga(action: Action<LOGIN_REQUEST>, dispatch: Dispatch) {

  yield put(loading(true));

  const { password, email } = action.payload;

  try {

    const { token, userId } = yield call(Authorization.loginRequest, email, password);

    yield put(loginSuccess(token, userId));

    Authorization.saveLocalstorage(token, userId);

    yield put(push('/dashboard'));

  } catch ({ response }) {

    yield put(enqueueNotification(NotificationFactory.create(
      response.data.message,
      'error',
      (key: string) => dispatch(closeNotification(key))
    )));

  } finally {

    yield put(loading(false));

  }

}


export function* loginAsyncSaga(dispatch: Dispatch) {

  yield takeEvery(LOGIN_REQUEST, (action: Action<LOGIN_REQUEST>) => loginSaga(action, dispatch));

}