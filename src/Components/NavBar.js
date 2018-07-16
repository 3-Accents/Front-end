import React, { Component } from 'react';
import '../App.css';
import {
    Layout,
    Menu,
    Avatar,

} from 'antd';

const {
    Header,
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
  </Layout>
    );
    }
}

export default NavBar;