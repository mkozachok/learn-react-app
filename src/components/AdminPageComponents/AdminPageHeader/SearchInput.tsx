import React from 'react';
import { Icon } from 'antd';

import { StyledSearchInput } from './StyledSearchInput';

export const SearchInput = () => {
  const focusHandler = (e: any) => {
    e.currentTarget.querySelector('input').focus();
  }

  return (
    <StyledSearchInput
      tabIndex={0}
      onFocus={(e) => focusHandler(e)}
    >
      <Icon type="search" />
      <input type="text" />
    </StyledSearchInput>
  )
};
