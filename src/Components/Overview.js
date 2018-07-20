import React, { Component } from 'react';
import '../App.css';
import API from '../API';
import BetList from './BetList';
import {
    Row,
    Col,
    Card,
    Button
} from 'antd';

class Overview extends Component {
    state = {
        categories: {
            active: [], //
            pending: [], //
            incoming: [], //
            completed: [], //
            void: [],//
            voting: [],//
            conflicted: [],
            myBad: []
        },
        friendsById: []
    }

    componentDidMount() {
        Promise.all([
            API.getFriends(),
            API.getBets()
        ]).then(results => {
            const friends = results[0]
            const categories = results[1]
            
            const friendsById = {}
            friends.forEach(friend => {
                friendsById[friend.id] = friend
            })
            this.setState({
                friendsById,
                categories
            })
        });
    }
    
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
                        <BetList title="Past" bets={this.state.categories.completed} friendsById={this.state.friendsById} user={this.props.user}/>
                    </Col>
                    <Col span={12}>  
                        <BetList title="Active" bets={this.state.categories.active} friendsById={this.state.friendsById} user={this.props.user}/>
                    </Col>
                </Row>
                    <br/>
                <Row gutter={20}>
                    <Col span={12}>  
                        <BetList title="Outgoing" bets={this.state.categories.pending} friendsById={this.state.friendsById} user={this.props.user}/>
                     </Col>
                    <Col span={12}>  
                        <BetList title="Incoming" bets={this.state.categories.incoming} friendsById={this.state.friendsById} user={this.props.user}/> 
                  </Col>
                </Row>

                <Row gutter={20}>
                    <Col span={12}>  
                        <BetList title="Void" bets={this.state.categories.void} friendsById={this.state.friendsById} user={this.props.user}/>
                    </Col>
                    <Col span={12}>  
                        <BetList title="Voting" bets={this.state.categories.voting} friendsById={this.state.friendsById} user={this.props.user}/>
                    </Col>
                </Row>

                <Row gutter={20}>
                
                    <Col span={12}>  
                        <BetList title="Conflicted" bets={this.state.categories.conflicted} friendsById={this.state.friendsById} user={this.props.user}/>
                    </Col>
                </Row>
                  <Button className="addbut" type="primary" shape="circle" icon="plus" />
                <br/><br/><br/><br/>
            </div>
        )
    }

}


export default Overview