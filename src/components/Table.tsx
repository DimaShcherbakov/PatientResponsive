import React from 'react';

class Table extends React.Component{

  public renderRows = () => {
    return (
      <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
    )
  }

  public render() {
    return (
      <div className="border">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Время</th>
              <th scope="col">Препарат</th>
              <th scope="col">Состояние</th>
              <th scope="col">Примечание</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;
