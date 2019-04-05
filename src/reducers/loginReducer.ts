import { AnyAction } from 'redux';
import { createReducer, createActions } from 'reduxsauce';
import { actionChannel } from 'redux-saga/effects';

interface ITypes {
  SUCCESS: 'SUCCESS';
  FAILURE: 'FAILURE';
  LOAD: 'LOAD';
}

interface ISuccess extends AnyAction {
  type: ITypes['SUCCESS'];
  id: number;
} 

interface ILoad extends AnyAction {
  type: ITypes['LOAD'];
  data: {
    email: string;
    password: string;
  }
} 

interface IFailure extends AnyAction {
  type: ITypes['FAILURE'];
  error: string;
}

interface IActions {
  success (id: number): ISuccess;
  load (data:any): ILoad;
  failure (error: string): IFailure;
}

export const { Types, Creators } = createActions<IActions, ITypes>({
  success: ['id'],
  load: ['data'],
  failure: ['error'],
});

// unused
// interface IHandlers {
//   [Types.SUCCESS]: object,
//   [Types.FAILURE]: object,
//   [Types.LOAD]: object,
// }

interface IState {
  isloading: boolean;
  authorised: boolean;
  failure: boolean;
  id: number;
  error: string;
}

const INITIAL_STATE: IState = {
  isloading: false,
  authorised: false,
  failure: false,
  id: 0,
  error: '',
};

const success = (state = INITIAL_STATE, action: any) => {
  console.log(action)
  return {
    ...state,
    authorised: true,
    isloading: false,
    id: action.id,
  }
};

// interface IAction {
//   email: string;
//   password: string;
// }

const load = (state = INITIAL_STATE, action:any) => {
  console.log(action)
  return {
    ...state,
    isloading: true,
    email: action.data.email,
    password: action.data.password,
  }
};

const failure = (state = INITIAL_STATE, action: string) => {
  console.log(action)
  return {
    ...state,
    isloading: false,
    failure: true,
    error: action
  }
};

// export const HANDLERS:IHandlers = {
//   [Types.SUCCESS]: success,
//   [Types.FAILURE]: failure,
//   [Types.LOADING]: loading,
// };

export const HANDLERS:any = {
  [Types.SUCCESS]: success,
  [Types.FAILURE]: failure,
  [Types.LOAD]: load,
};

const LoginReducer = createReducer(INITIAL_STATE, HANDLERS);

export default LoginReducer;
