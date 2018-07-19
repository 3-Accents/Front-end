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
  state = {
    user: null
  }
  componentDidMount(){
    this.parseToken()
  }
  parseToken(){
    if(localStorage.token){
      const base64Payload = localStorage.token.split('.')[1]
      const decodedPayload = atob(base64Payload)
      const user = JSON.parse(decodedPayload)

      this.setState({
        user
      })
    }
    else {
      this.setState({
        user: null
      })
    }
  }

  render() {
    console.log(this.state.user)
    return (
      <div className="App">
        <NavBar />
        <Content style={{ padding: '1% 15% 0 15%' }}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/overview' render={(props) => <Overview {...props} user={this.state.user}/>} />
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
