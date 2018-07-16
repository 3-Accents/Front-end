import React, { Component } from 'react';
import './App.css';
import {
    Layout,
    Menu,
    Icon,
    SubMenu,
    Breadcrumb,
    Avatar,

} from 'antd';

const {
    Header,
    Content,
    Footer
} = Layout;


class NavBar extends Component {
  render() {
    return (
      <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="2">AnteUp</Menu.Item>
           <Avatar src="./Media/image.png" />
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>

    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
    );
    }
}

export default NavBar;