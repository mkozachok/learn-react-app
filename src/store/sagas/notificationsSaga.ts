import { takeEvery } from 'redux-saga/effects';
import { productActionTypes } from '../actionTypes/productActionTypes';
import { notification } from 'antd';
import notifications from '../../resources/notifications';

function* successProductCreation() {
  yield notification.success(notifications.productCreationSuccess);
}

function* failureProductCreation() {
  yield notification.error(notifications.productCreationError);
}

function* successProductDeletion() {
  console.log("The product was deleted");
  yield notification.success(notifications.productDeletionSuccess);
}

function* failureProductDeletion() {
  yield notification.error(notifications.productDeletionError);
}

function* successProductUpdate() {
  yield notification.success(notifications.productUpdateSuccess);
}

function* failureProductUpdate() {
  yield notification.error(notifications.productUpdateError);
}

export default function* watchProductCreation() {
  yield takeEvery(productActionTypes.ADD_PRODUCT__SUCCESS, successProductCreation);
  yield takeEvery(productActionTypes.ADD_PRODUCT__FAILURE, failureProductCreation);
  yield takeEvery(productActionTypes.REMOVE_PRODUCT_BY_ID__SUCCESS, successProductDeletion);
  yield takeEvery(productActionTypes.REMOVE_PRODUCT_BY_ID__FAILURE, failureProductDeletion);
  yield takeEvery(productActionTypes.UPDATE_PRODUCT__SUCCESS, successProductUpdate);
  yield takeEvery(productActionTypes.UPDATE_PRODUCT__FAILURE, failureProductUpdate);
}
