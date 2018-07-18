import React, { Component } from 'react';
import '../App.css';

import { Card,
} from 'antd';



class ExampleForm extends Component {
  render() {
    return (
        <Card
        style={{ width: "80%", position: "relative", left: "10%"}}
        cover={<img alt="example" src="./Media/example-bet.png" />}
        >
        </Card>
    );
  }
}

export default ExampleForm;