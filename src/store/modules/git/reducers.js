import {handleActions} from 'redux-actions';
import produce from 'immer';
import * as GIT from './actions';

const initialState = {
  repoList: [], // git repository list
  totalCount: 0, // git repository Total Count
  favoriteRepo: [], // favorite repo list
  repoIssueList: [], // git repository issue
};

const git = handleActions(
  {
    [GIT.GET_REPO_LIST_SUCCESS]: (state, action) => {
      return produce(state, draft => {
        draft.repoList = action.payload.items;
        draft.totalCount = action.payload.total_count;
      });
    },
    [GIT.GET_REPO_LIST_FAILED]: (state, action) => {
      return produce(state, draft => {});
    },
    [GIT.CHANGE_REPO_LIST]: (state, action) => {
      return produce(state, draft => {
        draft.repoList = action.payload;
      });
    },
    [GIT.CHANGE_TOTAL_COUNT]: (state, action) => {
      return produce(state, draft => {
        draft.totalCount = action.payload;
      });
    },
    [GIT.CHANGE_FAVORITE_REPO]: (state, action) => {
      return produce(state, draft => {
        draft.favoriteRepo = action.payload;
      });
    },
    [GIT.GET_REPO_ISSUE_LIST_SUCCESS]: (state, action) => {
      return produce(state, draft => {
        draft.repoIssueList = action.payload;
      });
    },
    [GIT.GET_REPO_ISSUE_LIST_FAILED]: (state, action) => {
      return produce(state, draft => {});
    },
    [GIT.CHANGE_REPO_ISSUE_LIST]: (state, action) => {
      return produce(state, draft => {
        draft.repoIssueList = action.payload;
      });
    },
  },
  initialState,
);

export default git;
