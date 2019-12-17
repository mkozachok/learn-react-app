import { takeEvery } from 'redux-saga/effects';
import { productActionTypes } from '../actionTypes/productActionTypes';
import { notification } from 'antd';
import notifications from '../../resources/notifications';

function* successProductCreationSaga() {
  yield notification.success(notifications.productCreationSuccess);
}

function* failureProductCreationSaga() {
  yield notification.error(notifications.productCreationError);
}

function* successProductDeletionSaga() {
  yield notification.success(notifications.productDeletionSuccess);
}

function* failureProductDeletionSaga() {
  yield notification.error(notifications.productDeletionError);
}

function* successProductUpdateSaga() {
  yield notification.success(notifications.productUpdateSuccess);
}

function* failureProductUpdateSaga() {
  yield notification.error(notifications.productUpdateError);
}

export default function* watchProductCreation() {
  yield takeEvery(productActionTypes.ADD_PRODUCT__SUCCESS, successProductCreationSaga);
  yield takeEvery(productActionTypes.ADD_PRODUCT__FAILURE, failureProductCreationSaga);
  yield takeEvery(productActionTypes.REMOVE_PRODUCT_BY_ID__SUCCESS, successProductDeletionSaga);
  yield takeEvery(productActionTypes.REMOVE_PRODUCT_BY_ID__FAILURE, failureProductDeletionSaga);
  yield takeEvery(productActionTypes.UPDATE_PRODUCT__SUCCESS, successProductUpdateSaga);
  yield takeEvery(productActionTypes.UPDATE_PRODUCT__FAILURE, failureProductUpdateSaga);
}
