import { takeEvery, select, call, put } from 'redux-saga/effects';
import { Types, Creators } from '../reducers/loginReducer';
import { checkData  } from '../queries/index';

const { LOAD } = Types;

function* handleLoading(action:any):IterableIterator<any> {
  try {
    const loginInfo = action.data;
    const data = yield call(checkData, loginInfo);
    console.log(data.id)
    yield put(Creators.success(data.id))
  } catch(err) {
    put(Creators.failure(err))
    console.log(err)
  }
  
}

function* watchData():IterableIterator<any> {
  yield takeEvery(LOAD, handleLoading)
}

export default watchData;