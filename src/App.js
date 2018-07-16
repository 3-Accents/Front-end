import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
// import {Switch , Route} from "react-router-dom"


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to AnteUp</h1>
        </header>
        <NavBar />
      </div>
    );
  }
}

export default App;
