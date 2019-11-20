import { productActionsTypes } from './actionTypes';
import { IProduct } from '../interfaces';

export const getProductByIdStart = (product_id: string) => ({
  type: productActionsTypes.GET_PRODUCT_BY_ID__START,
  product_id,
})

export const getProductByIdSuccess = (product: IProduct) => ({
  type: productActionsTypes.GET_PRODUCT_BY_ID__SUCCESS,
  product,
})

export const getProductByIdFailure = () => ({
  type: productActionsTypes.GET_PRODUCT_BY_ID__FAILURE,
})
