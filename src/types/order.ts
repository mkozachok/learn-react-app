import { IProductBase } from "./product";

export interface IOrderItem extends IProductBase {
  quantity: number;
}

export interface INewOrderState {
  orderItems: IOrderItem[];
  totalPrice: number;
}
