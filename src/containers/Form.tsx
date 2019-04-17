import React from 'react';
import { connect } from 'react-redux';
import { Creators } from '../reducers/noteReducer';
import normalDate from '../utils/date';

interface IState{
  time: string;
  note: string;
  pill: string;
  state: string;
  [x: string]: string;
  err: string; 
}

interface INotes{
  success: boolean;
  loading: boolean;
  dataArr: {
    time: string;
    state: string;
    note: string;
    pill: string;
  }[],
}

interface IProps{
  notes: INotes;
  addNote (data: IData): () => object;
}

class Form extends React.Component<IProps, IState>{
  constructor(props:IProps) {
    super(props);
    this.state = {
      err: '',
      time: '',
      note: '',
      pill: '',
      state: '',
    }
  }
  
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

  public throwError = () => {
    return (
      <p>Введите данные</p>
    )
  }

  public sendData = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    const { addNote } = this.props;
    const { time, note, pill, state } = this.state;
    if (time === '' && note === '' && pill === '' && state === ''){
      this.setState({
        err: 'Введите данные',
      })
    } else {
      addNote({
        ...this.state,
        id: localStorage.id,
        date: normalDate(),
      })
    }
  }

  public render () {
    const { err } = this.state;
    return (
      <form
        action=""
        className="my-3 px-1"
        onSubmit={this.sendData}
      >
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
        { err != '' ? this.throwError() : '' }
      </form>
    )
  }
}

interface IData {
  id: number;
  date: string;
  time: string;
  state: string;
  note: string;
  pill: string;
}

const mapStateToProps = (state:any) => ({
  notes: state.notes,
})

const mapDispatchToProps = (dispatch: any) => ({
  addNote: (data:IData) => dispatch(Creators.load_data(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);