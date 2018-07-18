import React, { Component } from 'react';
import ExampleForm from './ExampleForm';
import { 
    Steps,
    Row,
    Icon,
    Card,
} from 'antd';
import '../App.css';

const Step = Steps.Step;

class Home extends Component {

    render(){
        return (
            <div>
                <div className="Home"></div>
                <div style={{ backgroundImage: `url(./Media/anteUp-bg.png)`, padding: '30px'}}>
                    <Card bordered={false} style={{ width: '100%', fontSize: '1.5em', textAlign: 'center', background:'transparent'}}>
                    <h1>Welcome to AnteUp!</h1>
                    <hr/>
                    <p>AnteUp is the best betting app out there! Connect with your Facebook friends to make bets and win! Take a look at the example content below. </p>
                    
                    
                    </Card>
                </div>
                <div>
                    <Row type="flex" justify="center">
                            <Steps>
                                <Step status="finish" title="Sign Up" icon={<Icon type="login" />} />
                                <Step status="finish" title="Create Bets" icon={<Icon type="plus-circle-o" />} />
                                <Step status="finish" title="Receive Bets" icon={<Icon type="check" />} />
                                <Step status="finish" title="Play!" icon={<Icon type="smile-o" />} />
                            </Steps>
                    </Row>
                </div>
                <ExampleForm/>
            </div>
        )
    }
}



export default Home 