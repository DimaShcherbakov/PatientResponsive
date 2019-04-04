import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container wrap">
        <Redirect from="/" to="/login" />
      </div>
    );
  }
}

export default App;
