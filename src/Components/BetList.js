import React from 'react';
import {Link} from "react-router-dom";
import {
    Card
} from 'antd';

const BetList = (props) => {
    return (
        <Card title={props.title} bordered={false} style={{textAlign: 'center' }}>
            {props.bets.map(bet => {
                return <Link to={`/view/${bet.id}`} key={bet.id}>{bet.title} vs {props.friendsById[bet.receiverId === props.user.id ? bet.creatorId : bet.receiverId].displayName}</Link>
            })}
        </Card> 
    )
}


export default BetList; 