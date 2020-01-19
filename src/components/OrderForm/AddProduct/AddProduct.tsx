import React from "react";
import AsyncSelect from "react-select/async";
import { INewOrderState } from "../../../types/order";
import { IProductBase } from "../../../types/product";
import productAPI from "../../../services/productAPI";
import { StyledAddProduct } from "./StyledAddProduct";

interface IAddProduct {
  order: INewOrderState;
  setOrder: (value: INewOrderState) => void;
}

export const AddProduct = ({ order, setOrder }: IAddProduct) => {
  const updateOrder = (selected: IProductBase) => {
    const orderItems = order.orderItems;
    let isIncluded = orderItems.some(item => item._id === selected._id);

    if (isIncluded) {
      setOrder({
        ...order,
        orderItems: orderItems.map(item =>
          item._id === selected._id
            ? { ...item, quantity: ++item.quantity }
            : item
        )
      });
    } else {
      setOrder({
        ...order,
        orderItems: [...orderItems, { ...selected, quantity: 1 }]
      });
    }
  };

  return (
    <StyledAddProduct>
      <AsyncSelect
        cacheOptions
        isClearable
        getOptionValue={option => option._id}
        getOptionLabel={option => option.title}
        loadOptions={productAPI.productsSearch}
        onChange={value => value && updateOrder(value as IProductBase)}
      />
    </StyledAddProduct>
  );
};
