import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import ExampleForm from "./Components/ExampleForm";
import { Layout } from 'antd';
import FooterComponent from './Components/FooterComponent';
// import SendRequest from './Components/SendRequest';

const { Content } = Layout;



const NotFound = () => <h1>Not Found</h1>

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Content style={{ padding: '1% 15% 0 15%' }}>
            <Switch>
                <Route exact path='/' component={Home} />
                {/* <Route exact path='/SendRequest' component={SendRequest} /> */}
                <Route  path='*' component={NotFound} />
            </Switch>
            <ExampleForm/>
        </Content>
        <FooterComponent/>
      </div>
    );
  }
}

export default App;
