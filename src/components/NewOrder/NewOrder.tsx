import React, { useState } from "react";
import { INewOrderState } from "../../types/order";
import { AddProduct } from "../OrderForm/AddProduct/AddProduct";
import { OrderItemsTable } from "../tables/CreateOrderTable/OrderItemsTable/OrderItemsTable";

let initOrder: INewOrderState = {
  orderItems: [],
  totalPrice: 0
};


export const NewOrder = () => {
  const [order, setOrder] = useState(initOrder);

  return (
    <div>
      <div style={{ padding: "30px 0" }}>
        <AddProduct order={order} setOrder={setOrder} />
      </div>
      {order.orderItems.length > 0 ? <OrderItemsTable order={order} setOrder={setOrder}/> : ''}
    
    </div>
  );
};
