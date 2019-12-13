import { all } from 'redux-saga/effects';

import watchGetProductByIdSaga from './productSaga';
import watchProductCreation from './notificationsSaga';

export default function* rootSaga() {
  yield all([
    watchGetProductByIdSaga(),
    watchProductCreation(),
  ]);
}
