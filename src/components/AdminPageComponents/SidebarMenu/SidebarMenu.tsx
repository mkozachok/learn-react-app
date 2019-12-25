import React from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu, Item } = Menu;

export const SidebarMenu = () => (
  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
    <Item key="1">
      <Icon type="pie-chart" />
      <span>Option 1</span>
    </Item>
    <Item key="2">
      <Icon type="desktop" />
      <span>Option 2</span>
    </Item>
    <SubMenu
      key="sub1"
      title={
        <span>
          <Icon type="user" />
          <span>User</span>
        </span>
      }
    >
      <Item key="3">Tom</Item>
      <Item key="4">Bill</Item>
      <Item key="5">Alex</Item>
    </SubMenu>
    <SubMenu
      key="sub2"
      title={
        <span>
          <Icon type="team" />
          <span>Team</span>
        </span>
      }
    >
      <Item key="6">Team 1</Item>
      <Item key="8">Team 2</Item>
    </SubMenu>
    <Item key="9">
      <Icon type="file" />
      <span>File</span>
    </Item>
  </Menu>
)