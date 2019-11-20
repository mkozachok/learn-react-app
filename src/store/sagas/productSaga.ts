import { call, put, takeLatest } from 'redux-saga/effects';
import productAPI from '../../services/productAPI';
import { productActionsTypes } from '../actionTypes';
// import { IProduct } from '../../interfaces';

function* productFetch(action: any) {
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

    yield put({ type: productActionsTypes.GET_PRODUCT_BY_ID__SUCCESS, currentProduct });
  }

  catch(error) {
    yield put({ type: productActionsTypes.GET_PRODUCT_BY_ID__FAILURE });
  }
}

function* watchProductFetch() {
  yield takeLatest(productActionsTypes.GET_PRODUCT_BY_ID__START, productFetch);
}

export function* rootSaga() {
  yield watchProductFetch();
}
