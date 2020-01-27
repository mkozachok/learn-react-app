import api from '../configs/api';
import { get, remove, post, put } from './http';
import { IProduct } from '../types/product';

const productBaseURL = `${api.host}/products`;

export const productAPI = {
  getProductByID: (product_id: string) => get(`${productBaseURL}/${product_id}`),
  removeProductByID: (product_id: string) => remove(`${productBaseURL}/${product_id}`),
  addProduct: (product: IProduct) => post(productBaseURL, product),
  updateProduct: (product: IProduct) => put(productBaseURL, product),
  getAllProducts: () => get(productBaseURL),
  productsSearch: (keywords: string) => get(`${productBaseURL}/search?keywords=${keywords}`)
}

export default productAPI;
