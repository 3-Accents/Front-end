import React, { Component } from 'react';
import '../App.css';
import API from '../API';
import {
    Card,
    Button,
} from 'antd';

const ButtonGroup = Button.Group;


class View extends Component{

    state = {
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      receiverId: '',
      wager: ''
    }

    componentDidMount(){
      const {id} = this.props.match.params;
      API.getBet(id)
        .then(bet => {
          bet.realStartDate = new Date(bet.startDate);
          bet.realEndDate = new Date(bet.endDate)
          bet.startDate = bet.realStartDate.toLocaleString();
          bet.endDate = bet.realEndDate.toLocaleString();
          this.setState(bet)
        });
    }
    getStatusElement(){
      const now = Date.now();
      const betStart = +this.state.realStartDate;
      const betEnd = +this.state.realEndDate;
      //Pending and incoming are always going to be broken until we have other users. 
      //Currently the creatorId and receiverId are the same and that breaks it. 
      //We cannot get anything into conflicted because there arent any other id's to vote for other than ID 1 (everything goes to voting).
      if (betStart > now && !this.state.receiverAccepted) {
        //pending is any bet where the receiver has not accepted it and the startdate is after the current date
        return( 
          <div>
            <h1>Pending...</h1>
          </div>
        )
      } 
      else if (betStart > now && this.state.receiverId === this.props.user.id && !this.state.receiverAccepted){
        //incoming is any bet where the receiver id is equal to the current user id and they havent accepted it and the start date is after the current date
        return( 
          <div>
            <div style={{textAlign: 'center', padding: '26px 16px 16px'}}>
              <Button style={{ marginRight: '1%'  }} type="primary" >Accept</Button>
              <Button type="danger">Decline</Button>
            </div>
          </div>
        )
      } 
      else if (betStart < now && now < betEnd && this.state.receiverAccepted) {
        //active is any bet where the current date falls between start and end date and is accepted
        return( 
          <div>
            <h1>Accepted!</h1>
          </div>
        )
      } 
      else if (betStart < now && !this.state.receiverAccepted){
        //void is any bet where the current date is after the start date where the receiver has not accepted it
        return(
          <div>Opponent did not accept!</div>
        )
      } 
      else if (betEnd <= now && this.state.receiverAccepted && (!this.state.receiverVoteWinner || !this.state.creatorVoteWinner)) {
        //voting is any bet where the receiver has accepted, winner is undetermined, and the end date has passed
        return (
          <div>
            <div style={{textAlign: 'center', padding: '26px 16px 16px'}}>
              <ButtonGroup>
                <Button id="positiveButton"><span role="img" aria-label="win">Me 👍</span></Button>
                <Button id="negativeButton"><span role="img" aria-label="loss">You 👎</span></Button>
              </ButtonGroup>
            </div>
          </div>
        )
      } 
      else if (betEnd < now && this.state.receiverAccepted && this.state.receiverVoteWinner && this.state.creatorVoteWinner && this.state.receiverVoteWinner !== this.state.creatorVoteWinner){
        //conflicted is any bet where the receiver is has accepted and a winner votes do not match and the end date has passed
        return (
          <div>
            <h4 style={{textAlign: 'center'}}>Your Votes Are Conflicting. Choose a winner!</h4>
            <div style={{textAlign: 'center', padding: '26px 16px 16px'}}>
              <ButtonGroup>
                <Button id="positiveButton"><span role="img" aria-label="win">Me 👍</span></Button>
                <Button id="negativeButton"><span role="img" aria-label="loss">You 👎</span></Button>
              </ButtonGroup>
            </div>
          </div>
        )
      } 
      else if (betEnd < now && this.state.receiverAccepted && this.state.receiverVoteWinner && this.state.creatorVoteWinner && this.state.receiverVoteWinner === this.state.creatorVoteWinner) {
        //completed is any bet where is receiver has accepted and a winner has been determined and the end date has passed
        return(
          <div>
            <h1 style={{textAlign: 'center'}}>CONGRATULATIONS, YOU WON!</h1>
            <h1 style={{textAlign: 'center'}}>Sorry, you lost!</h1>
          </div>
        )
      } 
      else {
        return <div><span role="img" aria-label="bug">🐞</span></div>
      }
    }
    render(){
      const statusElement = this.getStatusElement();
      // use bet from state to show a properties in a card 
        return(
            <div>
        <h1 style={{fontSize: '3em', textAlign:'center'}}>{this.state.title}</h1>
        {statusElement}
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card bordered={false} style={{ width: '100%', fontSize: '1.5em'}}>
            <dl>
              <dt><h3>Description</h3></dt>
              <dd>{this.state.description}</dd>
              <hr />
              <dt><h3>Wager</h3></dt>
              <dd>{this.state.wager}</dd>
              <hr />
              <dt><h3>Start Date</h3></dt>
              <dd>{this.state.startDate}</dd>
              <hr />
              <dt><h3>End Date</h3></dt>
              <dd>{this.state.endDate}</dd>
            </dl>
          </Card>
        </div>
      </div>
        )
    }
}

export default View;