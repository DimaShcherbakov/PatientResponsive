import React from 'react';
import Table from '../components/Table';

interface IState{
  time: string;
  note: string;
  pill: string;
  state: string;
}

interface IProps{

}

class Statistic extends React.Component<IState, IProps>{
  state = {}
  
  public handleUserInput = (e: React.FormEvent<HTMLInputElement>):void => {
    const { name } = e.currentTarget;
    const { value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  public handleSelectInput = (e: React.FormEvent<HTMLSelectElement>):void => {
    const { name } = e.currentTarget;
    const { value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  public render() {
    console.log(this.state)
    return (
      <div className="container border col-sm-6 d-flex flex-column">
        <div className="text-center border my-3">{ "Stat" }</div>
        <div className="text-center border my-3 flex-wrap">
          <form action="" className="my-3 px-1">
            <div className="justify-content-around d-flex">
              <input
                type="time"
                name="time"
                onChange={this.handleUserInput}
              />
              <input
                type="text"
                name="pill"
                onChange={this.handleUserInput}
                placeholder="Препарат"
              />
              <select
                name="state"
                onChange={this.handleSelectInput}
              >
                <option value="Choose state">Choose state</option>
                <option value="Хорошо">Хорошо</option>
                <option value="Удовл">Удовл.</option>
                <option value="Плохо">Плохо</option>
                <option value="Ужасное">Ужасное</option>
              </select>
            </div>
            <p className="my-3">
              <input 
                type="text"
                name="note"
                className="col-sm-11"
                onChange={this.handleUserInput}
              />
            </p>
            <input type="submit" />
          </form>
        </div>
        <Table />
      </div>
    )
  }
}

export default Statistic;
