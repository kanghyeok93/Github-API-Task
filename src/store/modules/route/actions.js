import {createAction} from 'redux-actions';

export const CHANGE_CURRENT_SCREEN_NAME = 'route/CHANGE_CURRENT_SCREEN_NAME';
export const change_current_screen_name = createAction(
  CHANGE_CURRENT_SCREEN_NAME,
);
