import {handleActions} from 'redux-actions';
import {produce, createDraft, finishDraft} from 'immer';
import * as MODAL from './actions';

const initialState = {
  isVisible: false,
  isOneButton: true,
  message: null,
  elements: null,
  size: null,
  onPressOK: null,
  buttonHeight: null,
  scrollJustifyContent: null,
};

const customModal = handleActions(
  {
    [MODAL.RESET_MODAL_STATE]: () => {
      const draft = createDraft(initialState);
      return finishDraft(draft);
    },
    [MODAL.CHANGE_MODAL_VISIBLE]: (state, action) => {
      return produce(state, draft => {
        draft.isVisible = action.payload;
      });
    },
    [MODAL.CHANGE_MODAL_ONE_BUTTON]: (state, action) => {
      return produce(state, draft => {
        draft.isOneButton = action.payload;
      });
    },
    // 리턴 함수 설정
    [MODAL.CHANGE_MODAL_ON_PRESS_OK]: (state, action) => {
      return produce(state, draft => {
        draft.onPressOK = action.payload;
      });
    },
    // 모달 속성 변경
    [MODAL.CHANGE_MODAL_ATTR]: (state, action) => {
      return produce(state, draft => {
        draft.isOneButton = action.payload.isOneButton;
        draft.size = action.payload.size;
        draft.buttonHeight = action.payload.buttonHeight;
        draft.scrollJustifyContent = action.payload.scrollJustifyContent;
        draft.elements = action.payload.elements;
        draft.isVisible = action.payload;
      });
    },
    // 모달 메세지 변경
    [MODAL.CHANGE_MODAL_MESSAGE]: (state, action) => {
      return produce(state, draft => {
        draft.message = action.payload;
        draft.isVisible = true;
      });
    },
  },
  initialState,
);

export default customModal;
