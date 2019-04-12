import React from 'react';

interface IState{

}

interface IProps{

}

class Statistic extends React.Component<IState, IProps>{
  public render() {
    return (
      <div className="container border col-sm-6 d-flex flex-column">
        <div className="text-center border my-3">{ "Stat" }</div>
        <div className="text-center border my-3 flex-wrap">
          <form action="" className="my-3 px-1">
            <div className="justify-content-around d-flex">
              <input type="time" placeholder="" />
              <input type="text" />
              <select name="" id="">
                <option value="">Choose state</option>
                <option value="">Хорошо</option>
                <option value="">Удовл.</option>
                <option value="">Плохо</option>
                <option value="">Ужасное</option>
              </select>
            </div>
            <p className="my-3">
              <input type="text" className="col-sm-11"/>
            </p>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default Statistic;
