import { take, put, call, takeEvery } from 'redux-saga/effects'
import { Types } from '../reducers/loginReducer';

function* checkData():IterableIterator<any>  {
  console.log(Types)
}

function* workerSaga():IterableIterator<any> {

}

function* saga():IterableIterator<any> {
  takeEvery(Types.SUCCESS, checkData)
}

export default saga;