import React from 'react';
import Card from '../components/Card';
import CardBody from '../utils/card';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
  redir: boolean;
};

interface IProps {
  enter: IEnter;
};

class Main extends React.Component<IProps, IState>{
  state = {
    redir:false,
  }

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

  public redirection = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('clicked')
    this.setState({ redir: true })
  }

  public render () {
    const { firstName, lastName, thirdName } = this.props.enter;
    const { redir } = this.state;
    console.log(this.state);
    if (redir) {
      const url = `/patient/${localStorage.id}`;
      const to = `/login`;
      // localStorage.id = null;
      console.log(url)
      console.log(to)
      return <Redirect from={ url } to={ to }/>
    } else {
      return (
        <div className="container border col-sm-6">
          <div
            className="link-back"
            onClick={ this.redirection }
          >
            <i className="fas fa-arrow-left"></i>
          </div>
          <div className="text-center border my-3">{ `${lastName} ${firstName} ${thirdName}` }</div>
          <section className="card-wrapper d-flex flex-wrap justify-content-between">
            { this.renderCards() }
          </section>
        </div>
      )
    }
  }
}

const mapStateToProps = (state:any) => ({
  enter: state.enter,
})

export default connect(mapStateToProps, null)(Main);