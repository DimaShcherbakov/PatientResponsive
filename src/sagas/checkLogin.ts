import { takeEvery, call, put } from 'redux-saga/effects';
import { Types, Creators } from '../reducers/loginReducer';
import { checkData  } from '../queries/index';

const { LOAD } = Types;

function* handleLoading(action:any):IterableIterator<any> {
  try {
    const loginInfo = action.data;
    const data = yield call(checkData, loginInfo);
    console.log(data.id);
    yield put(Creators.success(data.id));
  } catch(err) {
    yield put(Creators.failure(err.toString()));
  }
}

function* watchData():IterableIterator<any> {
  yield takeEvery(LOAD, handleLoading);
}

export default watchData;