import {takeLatest} from 'redux-saga/effects';
import * as GIT from './actions';
import * as gitAPI from '../../../lib/api/git';
import createRequestSaga from '../../../lib/createRequestSaga';

const getRepo = createRequestSaga(GIT.GET_REPO, gitAPI.getRepo);

export default function* rootSaga() {
  yield [yield takeLatest(GIT.GET_REPO, getRepo)];
}