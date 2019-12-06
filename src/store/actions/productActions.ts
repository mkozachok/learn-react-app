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

export const addProductStart = (product: IProduct) => ({
  type: productActionTypes.ADD_PRODUCT__START,
  product,
})

export const addProductSuccess = () => ({
  type: productActionTypes.ADD_PRODUCT__SUCCESS,
})

export const addProductFailure = () => ({
  type: productActionTypes.ADD_PRODUCT__FAILURE,
})


export const removeProductByIdStart = (product_id: string) => ({
  type: productActionTypes.REMOVE_PRODUCT_BY_ID__START,
  product_id,
})

export const removeProductByIdSuccess = () => ({
  type: productActionTypes.REMOVE_PRODUCT_BY_ID__SUCCESS,
})

export const removeProductByIdFailure = () => ({
  type: productActionTypes.REMOVE_PRODUCT_BY_ID__FAILURE,
})
