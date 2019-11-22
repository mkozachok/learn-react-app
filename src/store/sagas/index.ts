import watchGetProductByIdSaga from './productSaga';

export default function* rootSaga() {
  yield watchGetProductByIdSaga();
}
