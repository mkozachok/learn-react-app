import React from 'react';
import { Avatar, Dropdown, Menu, Icon } from 'antd';

export const AvatarDropdownMenu = () => {
  const { Item, Divider } = Menu;
  const menu = (
    <Menu>
      <Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          <Icon type="user" />
          <span>Account Center</span>
        </a>
      </Item>
      <Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          <Icon type="setting" />
          <span>Account Settings</span>
        </a>
      </Item>
      <Divider />
      <Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          <Icon type="logout" />
          <span>Logout</span>
        </a>
      </Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" href="#top">
        <Avatar className="avatar__image" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
        <span className="avatar__name">Kostia Sensei</span>
      </a>
    </Dropdown>
  )
}
