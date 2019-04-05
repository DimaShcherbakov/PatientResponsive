import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Login from './containers/Login';
import Main from './containers/MainPage';
import store from './store/index';
import * as serviceWorker from './serviceWorker';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <div className="container login">
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/patient/:code/:id" component={Main} />
      </Router>
    </Provider>
  </div>
, document.getElementById('root'));

serviceWorker.unregister();
