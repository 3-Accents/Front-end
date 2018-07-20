import React, { Component } from 'react';
import '../App.css';
import API from '../API';
import {
    Card
} from 'antd';

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
          bet.startDate = new Date(bet.startDate).toLocaleString();
          bet.endDate = new Date(bet.endDate).toLocaleString();
          this.setState(bet)
        });
    }
    render(){
      console.log(this.state)
      // use bet from state to show a properties in a card 
        return(
            <div>
        <h1 style={{fontSize: '3em', textAlign:'center'}}>{this.state.title}</h1>
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