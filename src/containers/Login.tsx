import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { Creators } from '../reducers/loginReducer';
import uuidv4 from 'uuid/v4';

interface IEnter {
  authorised: boolean;
  isloading: boolean;
  id: number;
}

interface IProps {
  enter: IEnter;
  checkData: any;
};

interface IState {
  email: string;
  password: string;
  flag: string;
  [x: string]: string; 
};

class Login extends React.Component<IProps, IState>{
  constructor(props:IProps) {
    super(props)
  }

  state: IState = {
    email: '',
    password: '',
    flag: 'patient',
  }
  
  public sendForm = (e: React.FormEvent<HTMLFormElement>):void=> {
    e.preventDefault();
    const { checkData } = this.props
    const { email, password } = this.state;
    checkData({
      email,
      password,
    });
  }

  public handleUserInput = (e: React.FormEvent<HTMLInputElement>):void => {
    const { name } = e.currentTarget;
    const { value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  public render() {
    const { email, password } = this.state;
    const { authorised, id, isloading} = this.props.enter;
    console.log(this.props)
    // console.log(authorised, id, isloading);
    if (authorised) {
      console.log(id)
      console.log(uuidv4())
      // const url = `/patient/${uuidv4()}${id}`;
      // console.log(url)
      // return <Redirect from="/login" to=''></Redirect>
    }
    return (
      <section className="col-md-5 container border border-dark">
        <form
          action=""
          onSubmit={this.sendForm}
          className="my-4"
        >
          <h1 className="text-center">Войти</h1>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={this.handleUserInput}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleUserInput}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </section>
    )
  }
}

interface IData {
  email: string;
  passsword: string;
}

const mapStateToProps = (state:any) => ({
  enter: state.enter,
})

const mapDispatchToProps = (dispatch: any) => ({
  checkData: (data:IData) => dispatch(Creators.load(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
