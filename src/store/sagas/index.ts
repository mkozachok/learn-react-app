import { all } from 'redux-saga/effects';

import { watchProductSagas } from './productSaga';
import watchProductCreation from './productNotificationSagas';
import watchGetProductsSaga from './productsSaga';

export default function* rootSaga() {
  yield all([
    watchGetProductsSaga(),
    watchProductSagas(),
    watchProductCreation(),
  ]);
}
