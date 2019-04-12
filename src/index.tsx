import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './store/index';
import Login from './containers/Login';
import Main from './containers/MainPage';
import Profile from './containers/Profile';
import Statistic from './containers/Statistic';
import Chat from './containers/Chat';
import Notification from './containers/Notification';

// const Login = React.lazy(() => import('./containers/Login'));
// const Main = React.lazy(() => import('./containers/MainPage'))
// const Profile = React.lazy(() => import('./containers/Profile'));
// const Statistic = React.lazy(() => import('./containers/Statistic'));
// const Chat = React.lazy(() => import('./containers/Chat'));
// const Notification = React.lazy(() => import('./containers/Notification'));


import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <div className="container login">
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route exact path="/patient/:id" component={Main} />
        <Route path="/patient/:id/profile" component={Profile} />
        <Route path="/patient/:id/stat" component={Statistic} />
        <Route path="/patient/:id/chat" component={Chat} />
        <Route path="/patient/:id/notification" component={Notification} />
      </Router>
    </Provider>
  </div>
, document.getElementById('root'));

serviceWorker.unregister();
