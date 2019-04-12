import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="container wrap">
        <Redirect from="/" to="/patient/1/stat"></Redirect>
      </div>
    );
  }
}

export default App;
