import React from 'react';
import { Redirect } from 'react-router';
import uuidv4 from 'uuid/v4';

interface IProps {
  authorised: boolean;
  id: number;
};

interface IState {
  email: string;
  password: string;
  [x: string]: string; 
};

class Login extends React.Component<IProps, IState>{
  constructor(props:IProps) {
    super(props)
  }

  state: IState = {
    email: '',
    password: '',
  }
  
  public sendForm = (e: React.FormEvent<HTMLFormElement>):void=> {
    e.preventDefault();
    console.log(this.state)
  }

  public handleUserInput = (e: React.FormEvent<HTMLInputElement>):void => {
    const { name } = e.currentTarget;
    const { value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  public render() {
    const { email, password } = this.state;
    const { authorised, id } = this.props;
    
    if (authorised) {
      const url = `/patient/${uuidv4()}${id}`;
      return <Redirect from="/login" to=''></Redirect>
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

export default Login;