import React, { Component } from 'react';
import '../App.css';

import {
    Row,
    Col,
    Card,
    Button
} from 'antd';

class Overview extends Component {

    // This should be on state.... do it.
    // const categories = {
    //     active: [],
    //     pending: [],
    //     incoming: [],
    //     completed: [],
    //     void: [],
    //     voting: [],
    //     conflicted: [],
    //     myBad: []
    //   };


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
                    <Card title="Past" bordered={false} style={{textAlign: 'center' }}>
                    <p>Mary-J-Blige Makes a 2019 comeback vs Jen</p>
                    <p>Beyonce becomes ugly at 70 vs Hoa</p>
                    <p>Pizza Bet vs Nick</p>
                    <p>Pizza Bet vs CJ</p>
                    <p>Pizza Bet vs Nick</p>
                    <p>Pizza Bet vs Hoa</p>

                 </Card> </Col>
                    <Col span={12}>  
                    <Card title="Current" bordered={false} style={{textAlign: 'center' }}>
                    <p>User vs Snow</p>
                    <p>User vs Hoa</p>
                    <p>User vs Nick</p>
                 </Card> </Col>
                </Row>
                    <br/>
                <Row gutter={20}>
                    <Col span={12}>  
                    <Card title="Outgoing" bordered={false} style={{ textAlign: 'center'}}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                 </Card> </Col>
                    <Col span={12}>  
                    <Card title="Incoming" bordered={false} style={{ textAlign: 'center'}}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                 </Card> 
                  </Col>
                </Row>
                  <Button className="addbut" type="primary" shape="circle" icon="plus" />
                <br/><br/><br/><br/>
            </div>
        )
    }

}


export default Overview