export interface IOrderItem {
    id: string,
    title: string,
    price: number,
    quantity?: number,
}

export interface INewOrderState {
    orderItems: IOrderItem[] | [],
    totalPrice: number,
}
