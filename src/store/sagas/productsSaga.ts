import { call, put, takeEvery } from 'redux-saga/effects';
import productAPI from '../../services/productAPI';
import { productActionTypes } from '../actionTypes/productActionTypes';

function* getProductsListSaga() {

  try {
    const productsList = yield call(productAPI.getAllProducts);
    yield put({type: productActionTypes.GET_PRODUCTS__SUCCESS, productsList});
  }
  catch(error) {
    yield put({type: productActionTypes.GET_PRODUCTS__FAILURE});
  }
}

export default function* watchGetProductsSaga() {
  yield takeEvery(productActionTypes.GET_PRODUCTS__START, getProductsListSaga);
}
