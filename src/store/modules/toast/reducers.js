import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as TOAST from './actions';

const initialState = {
  toastMessage: null, // 토스트 메세지
};

const global = handleActions(
  {
    [TOAST.CHANGE_TOAST_MESSAGE]: (state, action) => {
      return produce(state, draft => {
        draft.toastMessage = action.payload;
      });
    },
  },
  initialState,
);

export default global;
