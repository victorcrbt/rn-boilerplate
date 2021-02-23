import { all, put, takeLatest } from 'redux-saga/effects';

import * as AppTypes from './types';
import { signInSuccess } from './actions';

function* signIn() {
  yield put(signInSuccess());
}

export default all([takeLatest(AppTypes.SIGN_IN_REQUEST, signIn)]);
