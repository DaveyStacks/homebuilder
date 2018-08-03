import React, { Component } from 'react';
import Home from "./components/Home/Home";
import { BrowserRouter, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ResultsContainer from './components/searchandresults/'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="main">
            <Route exact path="/" component={Home} />
            <Route path="/hoodname/:name" />
            <Route path="/homemodel/:caption" />
            <Route path="/listings" component={ResultsContainer} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
