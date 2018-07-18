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
  loginWithFB = () => {
    let popup;
    window.addEventListener('message', (event) => {
      if (event.data.token){
        localStorage.token = event.data.token;
        popup.close();
      }
    });
    const width = 700;
    const height = 600;
    const top = window.screen.height/2 - height/2;
    const left = window.screen.width/2 - width/2;
    popup = window.open('http://localhost:3013/auth/facebook', 'Login With Facebook 👫', `width=${width},height=${height},top=${top},left=${left},resizable,scrollbars=yes,status=1` )
  }
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
        <Menu.Item onClick={this.loginWithFB} className="navbar-right" key="2">Login With Facebook</Menu.Item>
      </Menu>
    </Header>
  </Layout>
    );
    }
}

export default NavBar;