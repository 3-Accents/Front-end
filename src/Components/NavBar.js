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
        defaultSelectedKeys={['0']}
        style={{ lineHeight: '64px' }}
      >
          <Menu.Item><Avatar src="./Media/image.png"/> AnteUp</Menu.Item>
        <Menu.Item className="navbar-right" location="right" key="2">Login With Facebook</Menu.Item>
      </Menu>
    </Header>
  </Layout>
    );
    }
}

export default NavBar;