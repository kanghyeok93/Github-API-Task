import {createAction} from 'redux-actions';
import {createRequestActionTypes} from '../../../lib/createRequestSaga';

// Get Git Repository
export const [GET_REPO, GET_REPO_SUCCESS, GET_REPO_FAILED] =
  createRequestActionTypes('git/GET_REPO');
export const get_repo = createAction(GET_REPO);

// Change Repository Value
export const CHANGE_REPO = 'git/CHANGE_REPO';
export const change_repo = createAction(CHANGE_REPO);

// Change Repository Total Count
export const CHANGE_TOTAL_COUNT = 'git/CHANGE_TOTAL_COUNT';
export const change_total_count = createAction(CHANGE_TOTAL_COUNT);

// Change Favorite Repository
export const CHANGE_FAVORITE_REPO = 'git/CHANGE_FAVORITE_REPO';
export const change_favorite_repo = createAction(CHANGE_FAVORITE_REPO);

// Get Git Repository Issue
export const [GET_REPO_ISSUE, GET_REPO_ISSUE_SUCCESS, GET_REPO_ISSUE_FAILED] =
  createRequestActionTypes('git/GET_REPO_ISSUE');
export const get_repo_issue = createAction(GET_REPO_ISSUE);

// Change Repository Issue
export const CHANGE_REPO_ISSUE = 'git/CHANGE_REPO_ISSUE';
export const change_repo_issue = createAction(CHANGE_REPO_ISSUE);
