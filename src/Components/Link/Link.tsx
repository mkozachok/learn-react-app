import React from 'react';
import {StyledLink, LoginLink} from './styled';

type LinkProps = {
  path: string,
  title: string
};

const Link = ({path, title} : LinkProps) => { return <StyledLink href={path}> {title} </StyledLink> };
const Login = ({path, title} : LinkProps) => { return <LoginLink href={path}> {title} </LoginLink> };

export {
  Link,
  Login
};
