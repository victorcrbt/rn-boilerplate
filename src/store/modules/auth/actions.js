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

export function signOutRequest() {
  return {
    type: AppTypes.SIGN_OUT_REQUEST,
  };
}

export function signOutSuccess() {
  return {
    type: AppTypes.SIGN_OUT_SUCCESS,
  };
}

export function signOutFailure() {
  return {
    type: AppTypes.SIGN_OUT_FAILURE,
  };
}
