export interface IProduct {
  _id?: string
  title: string,
  description: string,
  costPrice: number,
  price: number,
  previewImage: string,
}

export interface IProductAction {
  type: string,
  currentProduct: null,
}

interface IProductReducer {
  currentProduct: IProduct,
  isLoading: boolean,
}

export interface IProductState {
  productReducer: IProductReducer,
}

export interface IProductList {
  products: IProduct[],
  isLoading: boolean
}

export interface IProductsAction {
  type: string,
  productsList?: IProductList
}
