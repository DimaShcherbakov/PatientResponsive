import { AnyAction } from 'redux';
import { createReducer, createActions } from 'reduxsauce';

interface ITypes {
  SUCCESS: 'SUCCESS';
  FAILURE: 'FAILURE';
  LOADING: 'LOADING';
}

interface ISuccess extends AnyAction {
  type: ITypes['SUCCESS'];
  id: number;
} 

interface ILoading extends AnyAction {
  type: ITypes['LOADING'];
  payload: {}
} 

interface IFailure extends AnyAction {
  type: ITypes['FAILURE'];
  payload: {}
}

interface IActions {
  success (id: number): ISuccess;
  loading (): ILoading;
  failure (): IFailure;
}

export const { Types, Creators } = createActions<IActions, ITypes>({
  success: ['id'],
  loading: null,
  failure: null,
});

// unused
interface IHandlers {
  [Types.SUCCESS]: object,
  [Types.FAILURE]: object,
  [Types.LOADING]: object,
}

interface IState {
  isLoading: boolean;
  authorised: boolean;
  failure: boolean;
  id: number;
}

const INITIAL_STATE: IState = {
  isLoading: false,
  authorised: false,
  failure: false,
  id: 0,
};

const success = (state = INITIAL_STATE, action: number) => (
  {
    ...state,
    authorised: true,
    id: action,
  }
);

const loading = (state = INITIAL_STATE) => {
  console.log('loading')
  return {
    ...state,
    isloading: true,
  }
};

const failure = (state = INITIAL_STATE) => (
  {
    ...state,
    failure: true,
  }
);

// export const HANDLERS:IHandlers = {
//   [Types.SUCCESS]: success,
//   [Types.FAILURE]: failure,
//   [Types.LOADING]: loading,
// };

export const HANDLERS:any = {
  [Types.SUCCESS]: success,
  [Types.FAILURE]: failure,
  [Types.LOADING]: loading,
};

const LoginReducer = createReducer(INITIAL_STATE, HANDLERS);

export default LoginReducer;
