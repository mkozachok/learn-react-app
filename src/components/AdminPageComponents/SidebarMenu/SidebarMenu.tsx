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
        <NavLink to="/admin/products/add">Add product</NavLink>
      </Item>
    </SubMenu>
  </Menu>
)
