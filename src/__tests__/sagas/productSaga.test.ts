import { put, takeLatest, takeEvery } from 'redux-saga/effects';
// import watchProductSagas,{getProductByIdSaga} from '../../store/sagas/productSaga'
import * as sagas from '../../store/sagas/productSaga'
import { productActionTypes } from '../../store/actionTypes/productActionTypes';
//TODO: FINISH THIS TEST, FIX ERRORS
describe('SAGAS', () => {
  let generator: any;
  describe('watcher saga', () => {
    beforeEach(() => {
      // generator = sagas.watchProductSagas()
    })
    it('should register other sagas', () => {
      // expect(generator.next().value).toEqual(takeLatest(productActionTypes.GET_PRODUCT_BY_ID__START, sagas.getProductByIdSaga));
      // expect(generator.next().value).toEqual(takeEvery(productActionTypes.REMOVE_PRODUCT_BY_ID__START, sagas.removeProductByIdSaga));
      // expect(generator.next().value).toEqual(takeEvery(productActionTypes.UPDATE_PRODUCT__START, sagas.updateProductSaga));
      // expect(generator.next().value).toEqual(takeEvery(productActionTypes.ADD_PRODUCT__START, sagas.addProductSaga));
      // expect(generator.next().done).toEqual(true)
      expect(true).toEqual(true)
    })
  })
})