import React from "react";
import "antd/dist/antd.css";
import { Table, InputNumber, Popconfirm, Button } from "antd";
import { INewOrderState, IOrderItem } from "../../../types/order";

interface IOrderItemsTable {
  order: INewOrderState;
  setOrder: (value: INewOrderState) => void;
}

export const OrderTable = ({ order, setOrder }: IOrderItemsTable) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "_id"
    },
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a: IOrderItem, b: IOrderItem) => a.title.length - b.title.length
    },
    {
      title: "Price",
      sorter: (a: IOrderItem, b: IOrderItem) => b.price - a.price,
      render: (record: IOrderItem) => <p>${record.price}</p>
    },
    {
      title: "Quantity",
      sorter: (a: IOrderItem, b: IOrderItem) => b.quantity - a.quantity,
      render: (record: IOrderItem) => (
        <InputNumber
          type="number"
          min={1}
          defaultValue={1}
          value={record.quantity}
          onChange={value => changeQuantity(record._id, value)}
        />
      )
    },
    {
      title: "Total",
      sorter: (a: IOrderItem, b: IOrderItem) =>
        b.price * b.quantity - a.price * a.quantity,
      render: ({ price, quantity }: IOrderItem) => <p>${price * quantity}</p>
    },
    {
      title: "",
      key: "action",
      render: ({ _id }: IOrderItem) => (
        <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(_id)}>
          <Button type="link" icon="delete">
            Delete
          </Button>
        </Popconfirm>
      )
    }
  ];

  const handleDelete = (id: string): void => {
    setOrder({
      ...order,
      orderItems: order.orderItems.filter(({ _id }: IOrderItem) => _id !== id)
    });
  };

  const changeQuantity = (id: string, newQuantity?: number): void => {
    setOrder({
      ...order,
      orderItems: order.orderItems.map((item: IOrderItem) =>
        item._id === id ? { ...item, quantity: newQuantity || 1 } : item
      )
    });
  };

  return (
    <Table
      style={{ margin: "0px 100px" }}
      dataSource={order.orderItems}
      columns={columns}
      rowKey={({ _id }: IOrderItem) => _id}
    />
  );
};
