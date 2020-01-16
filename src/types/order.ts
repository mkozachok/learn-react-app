export interface IProduct {
    id: string,
    title: string,
}

export interface INewOrderState {
    products: IProduct[] | null,
}
