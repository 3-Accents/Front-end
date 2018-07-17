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
        3-Accents
      </Footer>
    );
    }
}

export default FooterComponent;