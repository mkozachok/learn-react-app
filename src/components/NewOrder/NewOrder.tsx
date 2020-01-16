import React, { useState } from 'react';
import { INewOrderState } from '../../types/order';
import { AddProduct } from '../OrderForm/AddProduct/AddProduct';

const initOrder: INewOrderState = {
  orderItems: [],
  totalPrice: 0,
}

export const NewOrder = () => {
  const [order, setOrder] = useState(initOrder);

  return (
    <div style={{ padding: '30px 0' }}>
      <AddProduct order={order} setOrder={setOrder} />
    </div>
  )
}
