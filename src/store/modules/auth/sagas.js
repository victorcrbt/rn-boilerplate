import { all, put, takeLatest } from 'redux-saga/effects';

import mainRealm from '@database/main';
import UsersRepository from '@repositories/UsersRepository';

import * as AppTypes from './types';
import { signInSuccess, signInFailure, signOutSuccess } from './actions';

function* signIn({ payload }) {
  const { username, password } = payload;
  const usersRepository = new UsersRepository(mainRealm);

  try {
    const user = usersRepository.findByUsername(username);

    if (!user) {
      throw new Error('Invalid credentials.');
    }

    if (user.password !== password) {
      throw new Error('Invalid credentials.');
    }

    yield put(signInSuccess());
  } catch (error) {
    if (__DEV__) {
      console.log(error);
    }

    yield put(signInFailure());
  }
}

function* signOut() {
  yield put(signOutSuccess());
}

export default all([
  takeLatest(AppTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AppTypes.SIGN_OUT_REQUEST, signOut),
]);
