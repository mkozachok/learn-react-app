import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { productsList } from '../../../__mocks__/productsMock';
import { Button } from 'antd';
import { IProduct } from '../../../types/order';

const initProduct: IProduct | {} = {};

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

export const SelectProduct = ({ order, setOrder }: any) => {
  const [product, setProduct] = useState(initProduct);

  const addProduct = () => {
    if (Object.keys(product).length > 0) {
      const products = [...order.products];
      products.push(product);
      setOrder({ ...order, products });
    }
  }

  return (
    <div>
      <AsyncSelect
        cacheOptions
        defaultOptions
        isClearable
        getOptionValue={option => option.id}
        getOptionLabel={option => option.title}
        loadOptions={promiseOptions}
        onChange={(value) => value ? setProduct(value) : setProduct(initProduct)}
      />

      <Button
        type="primary"
        block
        style={{ marginTop: "1rem" }}
        onClick={addProduct}
      >
        Add product
      </Button>
    </div>
  )
}
