import { all, put, takeLatest } from 'redux-saga/effects';

import mainRealm from '@database/main';
import UsersRepository from '@repositories/UsersRepository';
import { warningNotification } from '@helpers/notifications';

import * as AppTypes from './types';
import { signInSuccess, signInFailure, signOutSuccess } from './actions';

function* signIn({ payload }) {
  const { username, password } = payload;
  const usersRepository = new UsersRepository(mainRealm);

  try {
    const user = usersRepository.findByUsername(username);

    if (!user) {
      throw new Error('Credenciais inválidas.');
    }

    if (user.password !== password) {
      throw new Error('Credenciais inválidas.');
    }

    yield put(signInSuccess());
  } catch (error) {
    if (__DEV__) {
      console.log(error);
    }

    warningNotification(error.message, { position: 'bottom' });
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
