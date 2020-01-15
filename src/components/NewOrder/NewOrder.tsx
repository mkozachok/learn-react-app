import React, { useState } from 'react';
import { INewOrderState } from '../../types/order';

const initOrder: INewOrderState = {
  products: null,
}

export const NewOrder = () => {
  const [order, setOrder] = useState(initOrder);

  return (
    <div></div>
  )
}
