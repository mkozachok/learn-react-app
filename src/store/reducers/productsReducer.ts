import { productActionTypes } from '../actionTypes/productActionTypes';
import { IProductsAction, IProductsReducer } from "../../types/product";

const initialState: IProductsReducer = {
  products: null,
  isLoading: false
};

const productsReducer = (state = initialState, action:IProductsAction) => {
  switch (action.type) {
    case productActionTypes.GET_PRODUCTS__START:
      return {
        ...state,
        isLoading: true
      }
    case productActionTypes.GET_PRODUCTS__SUCCESS:
      return {
        products: action.productsList,
        isLoading: false
      }
    case productActionTypes.GET_PRODUCTS__FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default: return state;
  }
};

export default productsReducer;
