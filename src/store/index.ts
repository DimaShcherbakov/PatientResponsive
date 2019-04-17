import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware  from 'redux-saga';
import loginReducer from '../reducers/loginReducer';
import noteReducer from '../reducers/noteReducer';
import saga from '../sagas/sagas';
import saga1 from '../sagas/addNote';
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  combineReducers({
    enter: loginReducer,
    notes: noteReducer,
  }),
  {},
  applyMiddleware(...middleware)
);

sagaMiddleware.run(saga);
sagaMiddleware.run(saga1);

export default store;