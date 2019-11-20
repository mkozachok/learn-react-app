//------------Interfaces related to Products------------//

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
