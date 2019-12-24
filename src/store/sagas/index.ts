import watchGetProductByIdSaga from './productSaga';
import watchGetProductsSaga from './productsSaga';
export default function* rootSaga() {
  yield watchGetProductsSaga();
  yield watchGetProductByIdSaga();
}
