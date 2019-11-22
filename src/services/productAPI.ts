import api from '../configs/api';
import { get } from './http';

export const productAPI = {
  getProductByID: (product_id: string) => get(`${api.host}/products/${product_id}`),
}

export default productAPI;
