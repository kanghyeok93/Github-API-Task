import {createAction} from 'redux-actions';

// 토스트 메세지 변경
export const CHANGE_TOAST_MESSAGE = 'global/CHANGE_TOAST_MESSAGE';
export const change_toast_message = createAction(CHANGE_TOAST_MESSAGE);
