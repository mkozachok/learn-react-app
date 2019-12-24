export interface IProduct {
  _id?: string
  title: string,
  description: string,
  price: number,
  previewImage: string,
  created_at: string,
  updated_at: string
}

export interface IProductAction {
  type: string,
  currentProduct: null,
}

interface IProductReducer {
  currentProduct: null | IProduct,
  isLoading: boolean,
}

export interface IProductState {
  productReducer: IProductReducer,
}

export interface IProductsReducer {
  products: null | IProduct[],
  isLoading: boolean,
}

export interface IProductsState {
  productsReducer: IProductsReducer,
}

export interface IProductsAction {
  type: string,
  productsList: null
}
