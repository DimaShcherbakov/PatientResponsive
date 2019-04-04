import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware  from 'redux-saga';
import loginReducer from '../reducers/loginReducer';
import saga from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  combineReducers({
    enter: loginReducer,
  }),
  {},
  applyMiddleware(...middleware)
);

store.dispatch({ type: 'Hello', });

sagaMiddleware.run(saga);

export default store;