import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import productsIcon from '../../icons/productsIcon';

const { SubMenu, Item } = Menu;

export const SidebarMenu = () => (
  <Menu theme="dark" mode="inline">
    <SubMenu
      key="sub1"
      title={
        <span>
          <Icon component={productsIcon} />
          <span>Products</span>
        </span>
      }
    >
      <Item key="1">
        <NavLink to="/admin/products">All products</NavLink>
      </Item>
      <Item key="2">
        <NavLink to="/admin/products/add">Add new product</NavLink>
      </Item>
    </SubMenu>
    <SubMenu
      key="sub2"
      title={
        <span>
          <Icon component={productsIcon} />
          <span>Orders</span>
        </span>
      }
    >
      <Item key="1">
        <NavLink to="/admin/orders">All orders</NavLink>
      </Item>
      <Item key="2">
        <NavLink to="/admin/orders/add">Add new order</NavLink>
      </Item>
    </SubMenu>
  </Menu>
)
