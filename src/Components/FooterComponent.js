import React, { Component } from 'react';
import '../App.css';
import {
    Layout,
} from 'antd';

const {
  Footer
} = Layout;


class FooterComponent extends Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    );
    }
}

export default FooterComponent;