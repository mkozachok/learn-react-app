export interface IProduct {
  title: string,
  description: string,
  price: number,
  imageURL: string,
  alt_image_text: string,
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
