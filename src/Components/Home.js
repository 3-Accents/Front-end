import React, { Component } from 'react';
import { 
    Steps,
    Row,
    Col,
    Icon,
    Card
} from 'antd';
import '../App.css';

const Step = Steps.Step;
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;


class Home extends Component {

    render(){
        return (
            <div>
                <div className="Home"></div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Card bordered={false} style={{ width: '100%', fontSize: '2em' }}>
                    <h1>Welcome to AnteUp</h1>
                    <hr/>
                    <p>The best betting app out there!</p>
                    <p>Instructions below:</p>
                    
                    </Card>
                </div>
                <div>
                    <Row type="flex" justify="center">
                            <Steps>
                                <Step status="finish" title="Sign Up" icon={<Icon type="login" />} />
                                <Step status="finish" title="Create Bets" icon={<Icon type="plus-circle-o" />} />
                                <Step status="process" title="Receive Bets" icon={<Icon type="check" />} />
                                <Step status="wait" title="Play!" icon={<Icon type="smile-o" />} />
                            </Steps>
                    </Row>
                </div>
                
            </div>
        )
    }
}



export default Home 