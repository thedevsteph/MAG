import React, { Component } from 'react';
import './App.css';
import Magazine from '../src/magazines.js'

class App extends Component {
  render() {
    return (
      <div className="mainDiv">
        <Magazine />
      </div>
    );
  }
}

export default App;
