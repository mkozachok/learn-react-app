import React from "react";
import "antd/dist/antd.css";
// import './index.css';
import { Table, InputNumber, Popconfirm, Button } from "antd";

export const OrderItemsTable = ({ order, setOrder }: any) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id"
    },
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a:any, b:any) => a.title.length - b.title.length,
    },
    {
      title: "Price",
      sorter: (a:any, b:any) => b.price - a.price,
      render: (record: any) => <p>${record.price}</p>
    },
    {
      title: "Quantity",
      sorter: (a:any, b:any) => b.quantity - a.quantity,
      render: (record: any) => (
        <InputNumber
          type="number"
          min={1}
          defaultValue={1}
          value={record.quantity}
          onChange={value => changeQuantity(record.id, value)}
        />
      )
    },
    {
      title: "Total",
      sorter: (a:any, b:any) => (b.price * b.quantity) - (a.price * a.quantity) ,
      render: (record: any) => <p>${record.price * record.quantity}</p>
    },
    {
      title: "",
      key: "action",
      render: (record: any) => (
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => handleDelete(record.id)}
        >
          <Button type="link" icon="delete">Delete</Button>
        </Popconfirm>
      )
    }
  ];

  const handleDelete = (id: string) => {
    const orderItems = order.orderItems.filter(function(element: any) {
      return element.id !== id;
    });
    setOrder({ ...order, orderItems });
  };

  const changeQuantity = (id: string, newQuantity: number) => {
    if (newQuantity) {
      const orderItems = order.orderItems.map((item: any) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      setOrder({ ...order, orderItems });
    } else {
      newQuantity = 1;
    }
  };

  return (
    <Table
      style={{ margin: "0px 100px" }}
      dataSource={order.orderItems}
      columns={columns}
      rowKey={(record: any) => record.id}
    />
  );
};
