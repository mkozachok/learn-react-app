import React, { useState } from 'react';
import { Layout } from 'antd';
import { AdminPageHeader } from '../../components/AdminPageComponents/AdminPageHeader/AdminPageHeader';
import { SiderContent } from '../../components/AdminPageComponents/SiderContent/SiderContent';
import { AdminPageFooter } from '../../components/AdminPageComponents/AdminPageFooter/AdminPageFooter';

const { Content, Sider } = Layout;

export const AdminPageLayout = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = (): void => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <SiderContent />
      </Sider>
      <Layout>
        <AdminPageHeader toggle={toggle} collapsed={collapsed} />
        <Content style={{ margin: '24px', backgroundColor: '#fff' }}>
          { children }
        </Content>
        <AdminPageFooter />
      </Layout>
    </Layout>
  )
}
