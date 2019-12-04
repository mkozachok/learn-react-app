import { productActionTypes } from '../actionTypes/productActionTypes';
import { IProductList } from '../../types/product';

export const getProductsStart = () => {
  type: productActionTypes.GET_PRODUCTS__START
};

export const getProductsSuccess = (productsList: IProductList) => {
  type: productActionTypes.GET_PRODUCTS__SUCCESS,
  productsList
};

export const getProductsFailure = () => {
  type: productActionTypes.GET_PRODUCTS__FAILURE
};
