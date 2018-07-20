import React, { Component } from 'react';
import '../App.css';
import API from '../API';
import {
    Card,
    Button,
} from 'antd';
import {
  withRouter
} from 'react-router-dom';

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
      this.getBet();
    }

    getBet = () => {
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
    declineRequest = () => {
      API.acceptRequest(this.state.id, false)
      .then(() => {
        this.props.history.push('/overview');
      })
    };

    acceptRequest = () => {
      API.acceptRequest(this.state.id, true)
      .then(() => {
        this.props.history.push('/overview');
      })
    };
    
    finalize = (who) => {
      const winner = who === 'me' ? this.props.user.id : this.state.creatorId === this.props.user.id ? this.state.receiverId : this.state.creatorId;
      API.finalizeBet(this.state.id, winner)
      .then(() => {
        this.getBet();
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
            <h1>Waiting for Opponent to Accept</h1>
          </div>
        )
      } 
      else if (betStart > now && this.state.receiverId === this.props.user.id && !this.state.receiverAccepted){
        //incoming is any bet where the receiver id is equal to the current user id and they havent accepted it and the start date is after the current date
        return( 
          <div>
            <div style={{padding: '26px 16px 16px'}}>
              <Button style={{ marginRight: '1%'  }} type="primary" onClick={this.acceptRequest}>Accept</Button>
              <Button type="danger" onClick={this.declineRequest}>Decline</Button>
            </div>
          </div>
        )
      } 
      else if (now < betEnd && this.state.receiverAccepted) {
        //active is any bet where the current date falls between start and end date and is accepted
        return( 
          <div>
            <h1>Game On!!</h1>
          </div>
        )
      } 
      else if (betStart < now && !this.state.receiverAccepted){
        //void is any bet where the current date is after the start date where the receiver has not accepted it
        return(
          <h1>Opponent did not accept!</h1>
        )
      } 
      else if (betEnd <= now && this.state.receiverAccepted && (!this.state.receiverVoteWinner || !this.state.creatorVoteWinner)) {
        //voting is any bet where the receiver has accepted, winner is undetermined, and the end date has passed
        return (
          <div>
            {this.state.creatorId === this.props.user.id && this.state.creatorVoteWinner ? 
            <h1>Opponent has not voted yet!</h1>:
            <div style={{padding: '26px 16px 16px'}}>
            <h1>Choose a Winner!</h1>
              <ButtonGroup >
                <Button onClick={() => {
                  this.finalize('me')
                }} 
                id="positiveButton"><span role="img" aria-label="win">Me 👍</span></Button>
                <Button onClick={() => {
                  this.finalize('them')
                }} 
                id="negativeButton"><span role="img" aria-label="loss">Them 👎</span></Button>
              </ButtonGroup>
            </div>}
          </div>
        )
      } 
      else if (betEnd < now && this.state.receiverAccepted && this.state.receiverVoteWinner && this.state.creatorVoteWinner && this.state.receiverVoteWinner !== this.state.creatorVoteWinner){
        //conflicted is any bet where the receiver is has accepted and a winner votes do not match and the end date has passed
        return (
          <div>
            <h4>Your Votes Are Conflicting. Nobody wins! 😳 👎 😭</h4>
          </div>
        )
      } 
      else if (betEnd < now && this.state.receiverAccepted && this.state.receiverVoteWinner && this.state.creatorVoteWinner && this.state.receiverVoteWinner === this.state.creatorVoteWinner) {
        //completed is any bet where is receiver has accepted and a winner has been determined and the end date has passed
        return(
          <div>
            {this.state.receiverVoteWinner == this.props.user.id ? 
            <h1>CONGRATULATIONS, YOU WON!</h1>:
            <h1>Sorry, you lost!</h1>}
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
        <div style={{textAlign: 'center'}}>{statusElement}</div>
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

export default withRouter(View);