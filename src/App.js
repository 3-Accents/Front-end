import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import Footer from "./Components/FooterComponent"
import { Layout } from 'antd';
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
                <Route  path='*' component={NotFound} />
            </Switch>
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
