import {takeLatest} from 'redux-saga/effects';
import * as GIT from './actions';
import * as gitAPI from '../../../lib/api/git';
import createRequestSaga from '../../../lib/createRequestSaga';

const getRepoList = createRequestSaga(GIT.GET_REPO_LIST, gitAPI.getRepoList);
const getRepoIssueList = createRequestSaga(
  GIT.GET_REPO_ISSUE_LIST,
  gitAPI.getRepoIssueList,
);

export default function* rootSaga() {
  yield [
    yield takeLatest(GIT.GET_REPO_LIST, getRepoList),
    yield takeLatest(GIT.GET_REPO_ISSUE_LIST, getRepoIssueList),
  ];
}
