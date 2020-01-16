import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { productsList } from '../../../__mocks__/productsMock';
import { Button } from 'antd';
import { StyledAddProduct } from './StyledAddProduct';

const filterProducts = (inputValue: string) => {
  return productsList.filter(product =>
    product.title.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue: string) => (
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterProducts(inputValue));
    });
  })
)

export const AddProduct = ({ order, setOrder }: any) => {
  const [currentProduct, setCurrentProduct] = useState();

  const addProduct = () => {
    if (currentProduct) {
      const orderItems = [...order.orderItems];
      let isIncluded = false;

      for (let orderItem of orderItems) {
        if (orderItem.id === currentProduct.id) {
          isIncluded = true;
          ++orderItem.quantity;
          break;
        }
      }

      if (!isIncluded) {
        orderItems.push({...currentProduct, quantity: 1});
      }

      setOrder({...order, orderItems})
    }
  }

  return (
    <StyledAddProduct>
      <AsyncSelect
        cacheOptions
        defaultOptions
        isClearable
        getOptionValue={option => option.id}
        getOptionLabel={option => option.title}
        loadOptions={promiseOptions}
        onChange={(value) => setCurrentProduct(value)}
      />

      <Button
        type="primary"
        block
        style={{ marginTop: "1rem" }}
        onClick={addProduct}
      >
        Add product
      </Button>
    </StyledAddProduct>
  )
}
