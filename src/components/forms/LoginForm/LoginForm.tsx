import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import { Spin, Icon } from "antd";
import {
  FormBlock,
  RowDiv,
  StyledButton,
  StyledForm,
  StyledIcon
} from "./styled";
import {
  AntInput,
  AntPassword,
  AntCheckbox
} from "../../../components/formControls";
import { SpinBlock } from "../UpdateProductForm/styled";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    username: "",
    password: "",
    rememberMe: false
  };

  return !isLoading ? (
    <div
      style={{
        position: "relative"
      }}
    >
      <FormBlock></FormBlock>
      <Formik
        initialValues={initialValues}
        //validationSchema={}
        onSubmit={() => {}}
      >
        {({ isSubmitting, isValid }) => (
          <StyledForm>
            <Field
              name="username"
              type="text"
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}
              placeholder="Username"
              autoComplete="off"
              component={AntInput}
              hasFeedback
            />
            <Field
              name="password"
              type="password"
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              placeholder="Password"
              min="6"
              component={AntPassword}
              hasFeedback
            />
            <RowDiv>
              <Field
                name="rememberMe"
                label="Remember me"
                type="checkbox"
                component={AntCheckbox}
              />
              <Link to="">Forgot password</Link>
            </RowDiv>
            <StyledButton
              htmlType="submit"
              type="primary"
              loading={isSubmitting}
              disabled={!isValid || isSubmitting}
            >
              Log in
            </StyledButton>
            <RowDiv>
              <div>Login with</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <Link to="">
                  <StyledIcon
                    type="google-circle"
                    theme="filled"
                  />
                </Link>
                <Link to="">
                  <StyledIcon
                    type="instagram"
                    theme="filled"
                  />
                </Link>
                <Link to="">
                  <StyledIcon
                    type="facebook"
                    theme="filled"
                  />
                </Link>
              </div>
              <div>
                or&nbsp;<Link to="/signup">Sign Up</Link>
              </div>
            </RowDiv>
          </StyledForm>
        )}
      </Formik>
    </div>
  ) : (
    <SpinBlock>
      <Spin size="large" />
    </SpinBlock>
  );
};
