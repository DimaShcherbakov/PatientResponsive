import { AnyAction } from 'redux';
import { createReducer, createActions } from 'reduxsauce';

interface ITypes {
  SUCCESS_DATA: 'SUCCESS_DATA';
  LOAD_DATA: 'LOAD_DATA';
  GET_DATA: 'GET_DATA';
}

interface ISuccess extends AnyAction {
  type: ITypes['SUCCESS_DATA'];
  data: {
    time: string;
    state: string;
    note: string;
    pill: string;
  }
}

interface ILoad extends AnyAction {
  type: ITypes['LOAD_DATA'];
  data: {
    id: number;
    date: string;
    time: string;
    state: string;
    note: string;
    pill: string;
  }
}

interface IGet extends AnyAction {
  type: ITypes['GET_DATA'];
  data: {
    time: string;
    state: string;
    note: string;
    pill: string;
  }[]
}

interface IActions {
  success_data (data:any): ISuccess;
  load_data (data:any): ILoad;
  get_data (data: any): IGet;
}

export const { Types, Creators } = createActions< IActions, ITypes>({
  success_data: ['data'],
  load_data: ['data'],
  get_data: ['data']
});

// unused
// interface IHandlers {
//   [Types.SUCCESS]: object,
//   [Types.FAILURE]: object,
//   [Types.LOAD]: object,
// }

interface IState {
  success: boolean;
  loading: boolean;
  dataArr: {
    time: string;
    state: string;
    note: string;
    pill: string;
  }[],
}

const INITIAL_STATE: IState = {
  success: false,
  loading: false,
  dataArr: [],
};

const success = (state = INITIAL_STATE, action: any) => {
  console.log(action)
  return {
    ...state,
    success: true,
    dataArr: [...state.dataArr, action.data]
  }
};

const load = (state = INITIAL_STATE, action:any) => {
  return {
    ...state,
    loading: true,
  }
};

const loadData = (state = INITIAL_STATE, action:any) => {
  return {
    ...state,
    dataArr: action.data,
  }
};

// export const HANDLERS:IHandlers = {
//   [Types.SUCCESS]: success,
//   [Types.FAILURE]: failure,
//   [Types.LOADING]: loading,
// };

export const HANDLERS:any = {
  [Types.SUCCESS_DATA]: success,
  [Types.LOAD_DATA]: load,
  [Types.GET_DATA]: loadData,
};

const noteReducer = createReducer(INITIAL_STATE, HANDLERS);

export default noteReducer;
