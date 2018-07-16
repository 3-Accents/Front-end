import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import Button from 'react-toolbox/lib/button/Button';
import {Switch , Route} from "react-router-dom"
import Home from "./Home"



const NotFound = () => <h1>Not Found</h1>

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
           <Route exact path='/' component={Home} />
            <Route  path='*' component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
