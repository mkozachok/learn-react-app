import { all } from 'redux-saga/effects';

import { watchProductSagas } from './productSaga';
import watchProductCreation from './productNotificationSagas';

export default function* rootSaga() {
  yield all([
    watchProductSagas(),
    watchProductCreation(),
  ]);
}
