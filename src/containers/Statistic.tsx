import React from 'react';
import Table from '../components/Table';
import normalDate from '../utils/date';
import Form from './Form';
import { Redirect } from 'react-router-dom';

interface IState {
  redir: boolean;
}

class Statistic extends React.Component<IState>{
  state = {
    redir: false,
  }
  
  public redirection = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.setState({ redir: true })
  }

  public render() {
    const { redir } = this.state;
    if (redir) {
      const url = `/patient/${localStorage.id}/stat`;
      const to = `/patient/${localStorage.id}`;
      return <Redirect from={ url } to={ to }/>
    }
    return (
      <div className="container border col-sm-6 d-flex flex-column">
        <div
          className="link-back"
          onClick={ this.redirection }
        >
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="text-center border my-3">{ "Statistic" }</div>
        <p>{ normalDate() }</p>
        <div className="text-center border my-3 flex-wrap">
          <Form />
        </div>
        <Table />
      </div>
    )
  }
}

export default Statistic;
