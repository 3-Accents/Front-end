import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import { Layout, } from 'antd';
import FooterComponent from './Components/FooterComponent';
import SendRequest from './Components/SendRequest';
import Overview from './Components/Overview';
import API from './API';

const { Content } = Layout;



const NotFound = () => <h1>Not Found</h1>

class App extends Component {
  componentDidMount() {
    API.getBets().then(bets => {
      console.log(bets);
      // set state with the bets...
    });
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Content style={{ padding: '1% 15% 0 15%' }}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/overview' component={Overview} />
                <Route exact path='/send-request' component={SendRequest} />
                <Route  path='*' component={NotFound} />
            </Switch>
        
        </Content>
        <FooterComponent/>
      </div>
    );
  }
}

export default App;
