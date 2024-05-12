import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Forum from '../forum/forum';
import './dashboard.scss';
const { Header, Content, Footer } = Layout;

const Dashboard: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header className='dashboard-header '>
        <div className='demo-logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          className='dashboard-menu'
        />
      </Header>
      <Content className='dashboard-content'>
        <Breadcrumb className='dashboard-bread'>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 500,

            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Forum />
        </div>
      </Content>
      <Footer className='dashboard-footer'>
        12/05/2024 ©{new Date().getFullYear()} Created by Atif Khan
      </Footer>
    </Layout>
  );
};

export default Dashboard;
