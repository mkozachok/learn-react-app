import React from "react";
import { Layout } from "antd";
import { LoginForm } from "../../components/forms";

const { Content } = Layout;

export const LoginPageLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content>
        <LoginForm></LoginForm>
      </Content>
    </Layout>
  );
};
