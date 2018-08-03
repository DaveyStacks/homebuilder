import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import CityLoc from './components/CityLocation';

class App extends Component {
   

  
  render() {
   const Home='';
   const Guest='';
    return (
      <div className="App">
        <div className="main">
          
          <CityLoc />
        </div>
      </div>
    );
  }
}
export default App;
