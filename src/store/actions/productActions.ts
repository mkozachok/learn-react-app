import { productActionTypes } from '../actionTypes/productActionTypes';
import { IProduct } from '../../types/product';

export const getProductByIdStart = (product_id: string) => ({
  type: productActionTypes.GET_PRODUCT_BY_ID__START,
  product_id,
})

export const getProductByIdSuccess = (product: IProduct) => ({
  type: productActionTypes.GET_PRODUCT_BY_ID__SUCCESS,
  product,
})

export const getProductByIdFailure = () => ({
  type: productActionTypes.GET_PRODUCT_BY_ID__FAILURE,
})
