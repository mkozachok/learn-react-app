import { call, put, takeLatest } from 'redux-saga/effects';
import productAPI from '../../services/productAPI';
import { productActionTypes } from '../actionTypes/productActionTypes';

function* getProductByIdSaga(action: any) {
  try {
    const currentProduct = yield call(productAPI.getProductByID, action.product_id);
    // comment the line above and uncomment lines below if current endpoint for the API doesn't work
    // const currentProduct: IProduct = {
    //     title: 'test',
    //     description: 'test',
    //     price: 2,
    //     imageURL: 'test',
    //     alt_image_text: 'test',
    // }

    yield put({ type: productActionTypes.GET_PRODUCT_BY_ID__SUCCESS, currentProduct });
  }

  catch(error) {
    yield put({ type: productActionTypes.GET_PRODUCT_BY_ID__FAILURE });
  }
}

export default function* watchGetProductByIdSaga() {
  yield takeLatest(productActionTypes.GET_PRODUCT_BY_ID__START, getProductByIdSaga);
}
