import React from 'react';
import {StyledLink, LoginLink} from './styled';

type LinkProps = {
  path: string,
  title: string
};

export const Link = ({path, title} : LinkProps) => { return <StyledLink href={path}> {title} </StyledLink> };
export const Login = ({path, title} : LinkProps) => { return <LoginLink href={path}> {title} </LoginLink> };
