import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as GIT from './actions';

const initialState = {
  repo: [], // git repository list
};

const git = handleActions(
  {
    [GIT.GET_REPO_SUCCESS]: (state, action) => {
      console.log('GET_REPO_SUCCESS => ', action.payload);
      return produce(state, draft => {
        draft.repo = action.payload;
      });
    },
    [GIT.GET_REPO_FAILED]: (state, action) => {
      console.log('GET_REPO_FAILED => ', action.payload);
      return produce(state, draft => {});
    },
  },
  initialState,
);

export default git;
