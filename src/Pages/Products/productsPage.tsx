import React, {useEffect} from 'react';
import 'antd/dist/antd.css';
import { Table} from 'antd';
import {useSelector, useDispatch} from "react-redux";
import {getProductsStart} from "../../store/actions/productsActions";
import {IProductsState, IProduct} from "../../types/product";
import {Header} from "./styled";

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text: string, record: IProduct) => {
      let path = '/products/' + record._id;
      return <a href={path}>{text}</a>;
    }
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
  },
  {
    title: 'Action',
    key: 'action',
    render: (record:IProduct) => <a href='#'>Edit</a>
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

