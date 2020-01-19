export interface IProduct {
  _id?: string;
  title: string;
  description: string;
  costPrice: number;
  price: number;
  previewImage: string;
  created_at?: string;
  updated_at?: string;
}

export interface IProductBase {
  _id: string;
  title: string;
  price: number;
}

export interface IProductAction {
  type: string;
  currentProduct: IProduct | null;
}

export interface IProductReducer {
  currentProduct: IProduct | null;
  isLoading: boolean;
}

export interface IProductState {
  productReducer: IProductReducer;
}

export interface IProductsReducer {
  products: null | IProduct[];
  isLoading: boolean;
}

export interface IProductsState {
  productsReducer: IProductsReducer;
}

export interface IProductsAction {
  type: string;
  productsList: null | IProduct[];
}
