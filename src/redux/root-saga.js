import { all, fork } from 'redux-saga/effects';

import { watchGetUser } from './user/sagas';

const rootSaga = function* () {
  yield all([fork(watchGetUser)]);
};

export default rootSaga;
