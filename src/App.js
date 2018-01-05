import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Users Demo</h1>
        </header>

        {/* Import users component */}
        <Users />

      </div>
    );
  }
}

export default App;
