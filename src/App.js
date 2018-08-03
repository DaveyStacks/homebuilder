import React, { Component } from 'react';
import './App.css';
import ResultsContainer from './components/searchandresults/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
            <div id="scroll"> 
              <ResultsContainer />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
