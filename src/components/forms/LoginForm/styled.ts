import styled from "styled-components";
import Button from "antd/lib/button";
import Icon from "antd/lib/icon";
import { Form } from "formik";

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const StyledIcon = styled(Icon)`
  font-size: 24px;
  verticalAlign: middle;
  padding-left: 5px;
  paddingRight: 5px;
`;

export const ForgotPasswordButton = styled(Button)`
  float: right;
`;

export const RowDiv = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const FormBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 0;
  background: rgb(116, 116, 240);
  background: linear-gradient(
    270deg,
    rgba(116, 116, 240, 1) 29%,
    rgba(0, 212, 255, 1) 91%
  );
`;

export const StyledForm = styled(Form)`
  padding: 10px;
  background-color: white;
  border-radius: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 300px;
  max-width: 360px;
`;
