import { all, put, takeLatest } from 'redux-saga/effects';

import * as AppTypes from './types';
import { signInSuccess, signOutSuccess } from './actions';

function* signIn() {
  yield put(signInSuccess());
}

function* signOut() {
  yield put(signOutSuccess());
}

export default all([
  takeLatest(AppTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AppTypes.SIGN_OUT_REQUEST, signOut),
]);
