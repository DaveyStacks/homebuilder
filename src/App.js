import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route path="/homemodel" />
          <Route path="/homemodel/:caption" />

          <Route path="/guest" component={Guest} />
        </div>
      </div>
    );
  }
}

export default App;
