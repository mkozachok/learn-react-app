import api from '../configs/api';
import { get, remove } from './http';

export const productAPI = {
  getProductByID: (product_id: string) => get(`${api.host}/products/${product_id}`),
  removeProductByID: (product_id: string) => remove(`${api.host}/products/${product_id}`),
  getAllProducts: () => get(`${api.host}/products)`)
}

export default productAPI;
