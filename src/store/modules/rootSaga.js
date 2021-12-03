import {all} from 'redux-saga/effects';
import gitSagas from './git/sagas';

export default function* rootSaga() {
  yield all([gitSagas()]);
}
