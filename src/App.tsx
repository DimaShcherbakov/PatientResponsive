import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="container wrap">
        <Redirect from="/login" to="/patient/12/1"></Redirect>
      </div>
    );
  }
}

export default App;
