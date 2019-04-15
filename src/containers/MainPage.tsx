import React from 'react';
import Card from '../components/Card';
import CardBody from '../utils/card';
import { connect } from 'react-redux';

import Profile from '../assets/profile_image.png';
import Messages from '../assets/messages.png';
import Notification from '../assets/notification.png';
import Analizes from '../assets/analizes.png';

interface IEnter {
  firstName: string;
  lastName: string;
  thirdName: string;
}

interface IState {

};

interface IProps {
  enter: IEnter;
};

class Main extends React.Component<IProps, IState>{
  public renderCards = () => {
    let id = localStorage.id;
    const cardsTitles = [
      CardBody.create({ title: 'Профиль', path: `/patient/${id}/profile`, image: Profile }),
      CardBody.create({ title: 'Статистика', path: `/patient/${id}/stat`, image: Analizes}),
      CardBody.create({ title: 'Уведомления', path: `/patient/${id}/notification`, image: Notification}),
      CardBody.create({ title: 'Связаться', path: `/patient/${id}/chat`, image: Messages}),
    ];
    return(
      <>
        { cardsTitles.map((el, i) => 
          <Card title={el.title} path={el.path} key={el.title} image={el.image}></Card>
        )}
      </>
    )
  }
  
  public render () {
    const { firstName, lastName, thirdName } = this.props.enter;
    return(
      <div className="container border w-50">
        <div className="text-center border my-3">{ `${lastName} ${firstName} ${thirdName}` }</div>
        <section className="card-wrapper d-flex flex-wrap justify-content-between">
          { this.renderCards() }
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state:any) => ({
  enter: state.enter,
})

export default connect(mapStateToProps, null)(Main);