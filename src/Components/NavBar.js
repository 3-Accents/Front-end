import React, { Component } from 'react';
import '../App.css';
import {
  withRouter
} from 'react-router-dom'
import {
    Layout,
    Menu,
    Avatar,
} from 'antd';

const {
    Header,
} = Layout;

const {SubMenu} = Menu;


class NavBar extends Component {
  state = {
    user: null,
  }
  componentDidMount(){
    this.parseToken()
  }
  parseToken(){
    if(localStorage.token){
      const base64Payload = localStorage.token.split('.')[1]
      const decodedPayload = atob(base64Payload)
      const user = JSON.parse(decodedPayload)
      console.log(user)
      this.setState({
        user
      })
    }
    else {
      this.setState({
        user: null
      })
    }
  }
  loginWithFB = () => {
    let popup;
    window.addEventListener('message', (event) => {
      if (event.data.token){
        localStorage.token = event.data.token;
        popup.close();
        this.parseToken();
        this.props.history.push('/overview');
      }
    });
    const width = 700;
    const height = 600;
    const top = window.screen.height/2 - height/2;
    const left = window.screen.width/2 - width/2;
    const authUrl = window.location.hostname === 'localhost' ? 'http://localhost:3013/auth/facebook' : 'https://ante-up.herokuapp.com/auth/facebook'
    popup = window.open(authUrl, 'Login With Facebook 👫', `width=${width},height=${height},top=${top},left=${left},resizable,scrollbars=yes,status=1` )
  }
  logout = () => {
    localStorage.removeItem('token');
    this.parseToken();
    this.props.history.push('/');
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
        {!this.state.user ? 
          <Menu.Item onClick={this.loginWithFB} className="navbar-right" key="2">Login With Facebook</Menu.Item> :
          <SubMenu className="navbar-right" title={<span><Avatar src={this.state.user.profilePic}/> {this.state.user.displayName}</span>}>
            <Menu.Item onClick={this.logout}>Logout</Menu.Item>
          </SubMenu>
        }
      </Menu>
    </Header>
  </Layout>
    );
    }
}

export default withRouter(NavBar);