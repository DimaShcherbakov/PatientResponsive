import { takeEvery, call, put } from 'redux-saga/effects';
import { Types, Creators } from '../reducers/noteReducer';
import { addNote } from '../queries/index';

const { LOAD_DATA } = Types;

function* handleLoading(action:any):IterableIterator<any> {
  try {
    const payload = action.data;
    const data = yield call(addNote, payload);
    yield put(Creators.success_data({
      time: payload.time,
      state: payload.state,
      note: payload.note,
      pill: payload.pill
    }));
  } catch(err) {
    // yield put(Creators.failure(err.toString()));
  }
}

function* watchData():IterableIterator<any> {
  yield takeEvery(LOAD_DATA, handleLoading);
}

export default watchData;