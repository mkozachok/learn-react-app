import api from '../configs/api';
import { get, remove, post } from './http';
import { IProduct } from '../types/product';

export const productAPI = {
  getProductByID: (product_id: string) => get(`${api.host}/products/${product_id}`),
  removeProductByID: (product_id: string) => remove(`${api.host}/products/${product_id}`),
  addProduct: (product: IProduct) => post(`${api.host}/products`, product),
  getAllProducts: () => get(`${api.host}/products)`)
}

export default productAPI;
