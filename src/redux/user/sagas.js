import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import {
  getUserAction,
  getUserErrorAction,
  getUserSuccessAction,
} from './slice';

function* getUserSaga({ payload: id }) {
  try {
    const response = yield axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    yield put(getUserSuccessAction(response.data));
  } catch (error) {
    yield put(getUserErrorAction(error));
  }
}

export function* watchGetUser() {
  yield takeLatest(getUserAction.type, getUserSaga);
}
