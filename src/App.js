import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import CityLoc from './components/CityLocation';

class App extends Component {
   

  
  render() {
   const Home='';
   const Guest='';
    return (


      <BrowserRouter>
        <div className="App">
          <div className="main">
            <Route exact path="/" component={Home} />
            <Route path="/hoodname/:name" />
            <Route path="/homemodel/:caption" />
          </div>

        </div>
      </BrowserRouter>
    );
  }
}
export default App;
