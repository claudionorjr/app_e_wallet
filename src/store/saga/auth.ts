import { call, takeLatest, put } from 'redux-saga/effects'

import AuthService from '../../services/auth'
import {
  LOGIN_REQUEST,
  loginSuccessAction,
  loginFailedAction,
  LoginRequestAction,
  LOGIN_SUCCESS,
} from '../ducks/auth'


export function* login(action: LoginRequestAction) {
  try {
    const { email, password } = action.payload
    const { user } = yield call(AuthService.login, email, password)

    yield put(loginSuccessAction(user))
  } catch (error) {
    yield put(loginFailedAction(error))
  }
}

export default [
  takeLatest(LOGIN_REQUEST, login),
  takeLatest(LOGIN_SUCCESS, loginSuccess),
]

export function* loginSuccess() {
  console.log('loginSuccess');
  yield call(NavigationService.replace, 'LoggedStack');
}
