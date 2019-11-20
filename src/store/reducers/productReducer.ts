import { productActionsTypes } from '../actionTypes';
import { IProductAction } from '../../interfaces';

const initState = {
  currentProduct: null,
}

const productReducer = (state = initState, action: IProductAction) => {
  switch(action.type) {
    case productActionsTypes.GET_PRODUCT_BY_ID__SUCCESS:
      return {
        currentProduct: action.currentProduct,
      }
    case productActionsTypes.GET_PRODUCT_BY_ID__FAILURE:
      return {
        currentProduct: null,
      }
    default:
      return state;
  }
}

export default productReducer;
