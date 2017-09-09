import { delay } from 'redux-saga';
import { put, takeEvery, all, call } from 'redux-saga/effects';

export function* helloSaga() {
  console.log('Hello world');
}

export function* incrementAsync() {
  yield call(delay, 1000);
  console.log('HERE');
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  console.log('WATCH INCREMENT');
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
