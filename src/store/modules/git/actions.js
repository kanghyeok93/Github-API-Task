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
