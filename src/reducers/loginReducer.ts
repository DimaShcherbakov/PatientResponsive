import { AnyAction } from 'redux';
import { createReducer, createActions } from 'reduxsauce';

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
  success (
    id: number,
    firstName: string,
    lastName: string,
    thirdName: string
  ): ISuccess;
  load (data:any): ILoad;
  failure (error: string): IFailure;
}

export const { Types, Creators } = createActions<IActions, ITypes>({
  success: ['id', 'firstName', 'lastName', 'thirdName'],
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
  firstName: string;
  lastName: string;
  thirdName: string;
}

const INITIAL_STATE: IState = {
  isloading: false,
  authorised: false,
  failure: false,
  id: 0,
  error: '',
  firstName: '',
  lastName: '',
  thirdName: '',
};

const success = (state = INITIAL_STATE, action: any) => {
  return {
    ...state,
    authorised: true,
    isloading: false,
    id: action.id,
    firstName: action.firstName,
    lastName: action.lastName,
    thirdName: action.thirdName,
  }
};

// interface IAction {
//   email: string;
//   password: string;
// }

const load = (state = INITIAL_STATE, action:any) => {
  return {
    ...state,
    isloading: true,
  }
};

const failure = (state = INITIAL_STATE, action: any) => {
  return {
    ...state,
    isloading: false,
    failure: true,
    error: action.error
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
