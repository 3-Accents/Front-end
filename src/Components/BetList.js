import React from 'react';
import {
    Card
} from 'antd';

const BetList = (props) => {
    return (
        <Card title={props.title} bordered={false} style={{textAlign: 'center' }}>
            {props.bets.map(bet => {
                return <p onClick={() => {this.handleNavClick(props)}} key={bet.id}>{bet.title} vs {props.friendsById[bet.receiverId === props.user.id ? bet.creatorId : bet.receiverId].displayName}</p>
            })}
        </Card> 
    )
}


export default BetList; 