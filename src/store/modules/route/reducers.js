import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as ROUTE from './actions';

const initialState = {
  screenName: '',
};

const route = handleActions(
  {
    [ROUTE.CHANGE_CURRENT_SCREEN_NAME]: (state, action) => {
      console.log('CHANGE_CURRENT_SCREEN_NAME => ', action.payload);
      return produce(state, draft => {
        draft.screenName = action.payload;
      });
    },
  },
  initialState,
);

export default route;
