import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  padding: 5px 30px 0px 100px; 
  border-color: lightgrey;
  border-width: 30px;
  border-style: solid;
  position: absolute;
  height: 94%;
  bottom: 0;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Link = styled.a`
  margin-right: 30px;
`;

export const H1 = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  width:50%;
`;

export const BigButton = styled.button`
  width: 20%;
  height: 70px;
  border-radius: 10px;
  border-color: #282c34;
  font-size: 24px;
  margin-top: 30px;
  text-decoration: none;
`;

export const Login = styled(Link)`
  display: block;
  margin-top: 20px;
`;

