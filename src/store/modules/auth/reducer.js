import produce from 'immer';

import * as AppTypes from './types';

const INITIAL_STATE = {
  isLoading: true,
  isSigned: false,
};

export default function app(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, (draft) => {
    switch (type) {
      case AppTypes.SIGN_IN_REQUEST: {
        draft.isLoading = true;
        break;
      }

      case AppTypes.SIGN_IN_SUCCESS: {
        draft.isLoading = false;
        draft.isSigned = true;
        break;
      }

      case AppTypes.SIGN_IN_FAILURE: {
        draft.isLoading = false;
        draft.isSigned = false;
        break;
      }

      default:
    }
  });
}
