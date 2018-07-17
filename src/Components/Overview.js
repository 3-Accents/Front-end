import React, { Component } from 'react';
import '../App.css';

import {
    Steps,
    Row,
    Col,
    Card,
    Button
} from 'antd';

class Overview extends Component {

    render(){
        return (
             <div style={{ background: '#ECECEC', padding: '30px' }}>
                 <Card bordered={false} style={{ width: '100%', fontSize: '1.5em', textAlign: 'center'}}>
                    <h1>Welcome to AnteUp!</h1>
                    <hr/>
                    <p>AnteUp is the best betting app out there! </p>
                 </Card>
                    <br/>

                <Row gutter={20}>
                    <Col span={12}>  
                    <Card title="Card title 1" bordered={false} style={{textAlign: 'center' }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                 </Card> </Col>
                    <Col span={12}>  
                    <Card title="Card title 2" bordered={false} style={{textAlign: 'center' }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                 </Card> </Col>
                </Row>
                    <br/>
                <Row gutter={20}>
                    <Col span={12}>  
                    <Card title="Card title 3" bordered={false} style={{ textAlign: 'center'}}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                 </Card> </Col>
                    <Col span={12}>  
                    <Card title="Card title 4" bordered={false} style={{ textAlign: 'center'}}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                 </Card> 
                  <Button className="addbut" type="primary" shape="circle" icon="plus" /></Col>
                </Row>



                </div>
        )
    }

}


export default Overview