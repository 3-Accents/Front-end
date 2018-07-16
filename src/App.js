import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import Button from 'react-toolbox/lib/button/Button';

// import {Switch , Route} from "react-router-dom"


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <h1 className="App-title">Welcome to AnteUp</h1>

           <Button label="Hello World!" />
        </header>
      </div>
    );
  }
}

export default App;
