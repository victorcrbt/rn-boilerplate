import * as AppTypes from './types';

export function signInRequest(email, password) {
  return {
    type: AppTypes.SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess() {
  return {
    type: AppTypes.SIGN_IN_SUCCESS,
  };
}

export function signInFailure() {
  return {
    type: AppTypes.SIGN_IN_FAILURE,
  };
}
