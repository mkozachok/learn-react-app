import React, { useState } from 'react';
import { INewOrderState } from '../../types/order';

const initState: INewOrderState = {
  products: null,
}

export const NewOrder = () => {
  const [state, setState] = useState(initState);

  return (
    <div></div>
  )
}
