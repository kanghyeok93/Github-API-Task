import {createAction} from 'redux-actions';
import {createRequestActionTypes} from '../../../lib/createRequestSaga';

// Git Repository 가져오기
export const [GET_REPO, GET_REPO_SUCCESS, GET_REPO_FAILED] =
  createRequestActionTypes('git/GET_REPO');
export const get_repo = createAction(GET_REPO);
