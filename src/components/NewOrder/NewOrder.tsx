import React, { useState } from "react";
import { INewOrderState } from "../../types/order";
import { AddProduct } from "../OrderForm/AddProduct/AddProduct";
import { AddNovaposhta } from "../OrderForm/AddNovaposhta/AddNovaposhta";
import { OrderTable } from "../tables/";

export const initOrder: INewOrderState = {
  orderItems: [],
  totalPrice: 0
};

export const NewOrder = () => {
  const [order, setOrder] = useState(initOrder);
  const isOrderNotEmpty = order.orderItems.length > 0;
  return (
    <div>
      <div style={{ padding: "30px 0" }}>
        <AddProduct order={order} setOrder={setOrder} />
      </div>
      {isOrderNotEmpty && <OrderTable order={order} setOrder={setOrder} />}
      <div style={{ padding: "30px 0" }}>
        <AddNovaposhta />
      </div>
    </div>
  );
};
