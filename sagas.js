import { delay } from 'redux-saga';
import { put, takeEvery, all, call, takeLatest } from 'redux-saga/effects';

export function* helloSaga() {
  console.log('Hello world');
}

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  console.log('WATCH INCREMENT');
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);

  // takeLatest will only yield the latest request
  // yield takeLatest('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
