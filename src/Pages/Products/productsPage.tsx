import React, {useEffect} from 'react';
import 'antd/dist/antd.css';
import { Table, Divider, Tag } from 'antd';
import {useSelector, useDispatch} from "react-redux";
import {getProductsStart} from "../../store/actions/productsActions";
import {IProductsState} from "../../types/product";
import {Header} from "./styled";

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: 'Created',
    dataIndex: 'created_at',
    key: 'created'
  },
  {
    title: 'Updated last',
    dataIndex: 'updated_at',
    key: 'updated'
  }
];

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: IProductsState) => state.productsReducer.products);
  const loading = useSelector((state: IProductsState) => state.productsReducer.isLoading);

  useEffect(() => {
    dispatch(getProductsStart());
  }, [dispatch, products]);
  return products ? (
    <div>
      <Header>Products</Header>
      <div>
        <Table columns={columns} dataSource={products} rowKey='_id'/>
      </div>
    </div>
  ) : (<div>no products</div>);
};

