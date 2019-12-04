import { productActionTypes } from '../actionTypes/productActionTypes';
import {IProductList, IProductsAction} from "../../types/product";

const initialState:IProductList = {
  products: [],
  isLoading: false
};

const products = (state = initialState, action:IProductsAction) => {
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
  }
};
