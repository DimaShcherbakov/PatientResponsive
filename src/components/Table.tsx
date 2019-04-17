import React from 'react';
import { connect } from 'react-redux';
import axios from '../utils/axios';
import normalDate from '../utils/date';
import { Creators } from '../reducers/noteReducer';

interface IData {
  success: boolean;
  loading: boolean;
  dataArr: {
    time: string;
    state: string;
    note: string;
    pill: string;
  }[],
}

interface IProps {
  notes: IData;
  getData (data: any): () => object;
}

class Table extends React.Component<IProps>{

  public getNotes = async (date:string) => {
    const { getData } = this.props;
    try {
      const res = await axios.post(`/patient/diary/${localStorage.id}`, { date });
      getData(res.data)
    } catch (err) {
      throw new Error(err);
    }
  }

  public componentDidMount() {
    this.getNotes(normalDate())
  }

  public renderRows = () => {
    const { dataArr } = this.props.notes;
    return (
      <>
        { dataArr.map((el, i) => 
          <tr key={ el.time }>
            <td>{ el.time }</td>
            <td>{ el.pill }</td>
            <td>{ el.state }</td>
            <td>{ el.note }</td>
          </tr>
        )}
      </>
    )
  }

  public render() {
    return (
      <div className="border my-3">
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
const mapStateToProps = (state:any) => ({
  notes: state.notes,
});

const mapDispatchToProps = (dispatch: any) => ({
  getData: (array:any) => dispatch(Creators.get_data(array))
})

export default connect(mapStateToProps, mapDispatchToProps)(Table);
