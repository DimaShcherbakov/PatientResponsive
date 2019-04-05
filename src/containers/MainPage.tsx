import React from 'react';
import Card from '../components/Card'

class Main extends React.Component {
  public renderCards = () => {
    const cardsTitles = ['Профиль', 'Статистика', 'Уведомления', 'Связаться']
    return(
      <>
        { cardsTitles.map((el, i) => <Card></Card>) }
      </>
    )
  }
  public render () {
    console.log(this.props)
    return(
      <div className="container border">
        <div className="text-center border my-3">{ 'Oth,frjd Lvbnhbq Jktujdbx' }</div>
        <section className="card-wrapper d-flex flex-wrap justify-content-between">
          { this.renderCards() }
        </section>
      </div>
    )
  }
}

export default Main;