import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
import Foo from './Foo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.jsx</code> and save to reload. It's magic!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Demo name='Meow'/>
        <Foo name="Woof"/>
      </div>
    );
  }
}

export default App;
