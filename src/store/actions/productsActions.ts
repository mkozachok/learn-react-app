import { productActionTypes } from '../actionTypes/productActionTypes';
import {IProduct} from '../../types/product';

export const getProductsStart = () => ({
  type: productActionTypes.GET_PRODUCTS__START
});

export const getProductsSuccess = (productsList: IProduct[]) => ({
  type: productActionTypes.GET_PRODUCTS__SUCCESS,
  productsList
});

export const getProductsFailure = () => ({
  type: productActionTypes.GET_PRODUCTS__FAILURE
});
