import {createAction} from 'redux-actions';
import {createRequestActionTypes} from '../../../lib/createRequestSaga';

// Get Git Repository List
export const [GET_REPO_LIST, GET_REPO_LIST_SUCCESS, GET_REPO_LIST_FAILED] =
  createRequestActionTypes('git/GET_REPO_LIST');
export const get_repo_list = createAction(GET_REPO_LIST);

// Change Repository Value
export const CHANGE_REPO_LIST = 'git/CHANGE_REPO_LIST';
export const change_repo_list = createAction(CHANGE_REPO_LIST);

// Change Repository Total Count
export const CHANGE_TOTAL_COUNT = 'git/CHANGE_TOTAL_COUNT';
export const change_total_count = createAction(CHANGE_TOTAL_COUNT);

// Change Favorite Repository
export const CHANGE_FAVORITE_REPO = 'git/CHANGE_FAVORITE_REPO';
export const change_favorite_repo = createAction(CHANGE_FAVORITE_REPO);

// Get Git Repository Issue List
export const [
  GET_REPO_ISSUE_LIST,
  GET_REPO_ISSUE_LIST_SUCCESS,
  GET_REPO_ISSUE_LIST_FAILED,
] = createRequestActionTypes('git/GET_REPO_ISSUE_LIST');
export const get_repo_issue_list = createAction(GET_REPO_ISSUE_LIST);

// Change Repository Issue List
export const CHANGE_REPO_ISSUE_LIST = 'git/CHANGE_REPO_ISSUE_LIST';
export const change_repo_issue_list = createAction(CHANGE_REPO_ISSUE_LIST);
