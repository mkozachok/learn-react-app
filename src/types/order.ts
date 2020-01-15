interface IProduct {
    value: string,
    label: string,
}

export interface INewOrderState {
    products: IProduct[] | null,
}
