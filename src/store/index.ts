import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware  from 'redux-saga';
import loginReducer from '../reducers/loginReducer';

const saga = createSagaMiddleware();
const middleware = [saga]

const store = createStore(
  combineReducers({
    enter: loginReducer,
  }), 
  {},
  applyMiddleware(...middleware)
)

export default store;