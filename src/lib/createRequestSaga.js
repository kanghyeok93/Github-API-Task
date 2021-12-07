import {call, put} from 'redux-saga/effects';
import {startLoading, finishLoading} from '../store/modules/loading/actions';

export const createRequestActionTypes = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILED = `${type}_FAILED`;
  return [type, SUCCESS, FAILED];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILED = `${type}_FAILED`;

  return function* (action) {
    yield put(startLoading(type)); // 로딩 시작

    const response = yield call(request, action.payload);
    const statusCode = response.statusCode || response.responseStatus;
    if (statusCode >= 400) {
      // 실패인 경우
      yield put({
        type: FAILED,
        payload: response || action.payload,
        error: true,
      });
    } else {
      // 성공인 경우
      yield put({
        type: SUCCESS,
        payload: response || action.payload,
        meta: response,
      });
    }

    yield put(finishLoading(type)); // 로딩 끝
  };
}
