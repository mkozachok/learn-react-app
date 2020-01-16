import React, { useState } from 'react';
import { INewOrderState } from '../../types/order';
import { SelectProduct } from '../OrderForm/SelectProduct/SelectProduct';

const initOrder: INewOrderState = {
  products: [],
}

export const NewOrder = () => {
  const [order, setOrder] = useState(initOrder);
  console.log(order);

  return (
    <div>
      <SelectProduct order={order} setOrder={setOrder} />
    </div>
  )
}
