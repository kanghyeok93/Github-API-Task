import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as GIT from './actions';

const initialState = {
  repoList: [], // git repository list
  totalCount: 0, // git repository Total Count
};

const git = handleActions(
  {
    [GIT.GET_REPO_SUCCESS]: (state, action) => {
      console.log('GET_REPO_SUCCESS => ', action.payload.items);
      return produce(state, draft => {
        draft.repoList = action.payload.items;
        draft.totalCount = action.payload.total_count;
      });
    },
    [GIT.GET_REPO_FAILED]: (state, action) => {
      console.log('GET_REPO_FAILED => ', action.payload);
      return produce(state, draft => {});
    },
    [GIT.CHANGE_REPO]: (state, action) => {
      console.log('CHANGE_REPO => ', action.payload);
      return produce(state, draft => {
        draft.repoList = action.payload;
      });
    },
    [GIT.CHANGE_TOTAL_COUNT]: (state, action) => {
      console.log('CHANGE_TOTAL_COUNT => ', action.payload);
      return produce(state, draft => {
        draft.totalCount = action.payload;
      });
    },
  },
  initialState,
);

export default git;
