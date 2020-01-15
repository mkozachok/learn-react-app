import React from 'react';
import { Layout, Icon, Button, Badge } from 'antd';
import { StyledAdminPageHeader } from './StyledAdminPageHeader';
import { SearchInput } from './SearchInput';
import { AvatarDropdownMenu } from './AvatarDropdownMenu';
import { IAdminPageHeaderProps } from '../../../types/adminDashboard';

export const AdminPageHeader = ({ toggle, collapsed }: IAdminPageHeaderProps) => {
  const { Header } = Layout;

  return (
    <StyledAdminPageHeader>
      <Header className="header">
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={() => toggle()}
        />
        <ul className="header__right-content">
          <li className="header__right-content__item">
            <SearchInput />
          </li>
          <li className="header__right-content__item">
            <Button shape="circle" icon="question" />
          </li>
          <li className="header__right-content__item">
            <Badge count={11}>
              <Icon type="bell" />
            </Badge>
          </li>
          <li className="header__right-content__item avatar">
            <AvatarDropdownMenu />
          </li>
          <li className="header__right-content__item">
            <Icon type="global" />
          </li>
        </ul>
      </Header>
    </StyledAdminPageHeader>
  )
}
