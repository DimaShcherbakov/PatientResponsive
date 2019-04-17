import React from 'react';

interface IState{

}

interface IProps{

}

class Profile extends React.Component<IState, IProps>{
  public render() {
    return (
      <div className="container border col-sm-6 d-flex flex-column">
        <div
          className="link-back"
          
        >
          <i className="fas fa-arrow-left"></i>
        </div>
        <p className="border my-2 text-center">Profile</p>
        <section className="border my-2 d-flex justify-content-around">
          <div className="border">
            <p>Фамилия</p>
            <p>Имя</p>
            <p>Отчество</p>
            <p>Дата рождения</p>
            <p>Отчество</p>
          </div>
          <div className=" ava-wrap border">
            <img src="" alt="ava" width="200px" height="200px"/>
          </div>
        </section>
        <section>
          <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">Simple collapsible</button>
          <p id="demo" className="collapse">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>
      </div>
    )
  }
}

export default Profile;
