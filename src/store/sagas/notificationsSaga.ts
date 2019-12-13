import { takeEvery } from 'redux-saga/effects';
import { productActionTypes } from '../actionTypes/productActionTypes';
import { notification } from 'antd';
import notifications from '../../resources/notifications';

function* successProductCreation() {
  yield notification.success(notifications.success);
}

function* failureProductCreation() {
  yield notification.error(notifications.error);
}

export default function* watchProductCreation() {
  yield takeEvery(productActionTypes.ADD_PRODUCT__SUCCESS, successProductCreation);
  yield takeEvery(productActionTypes.ADD_PRODUCT__FAILURE, failureProductCreation);
}
