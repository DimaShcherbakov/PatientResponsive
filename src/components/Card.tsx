import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  title: string;
  path: string;
  image: string;
  key: string;
}

const Card = (props: IProps) => {
  return(
    <div className="card my-3 mx-2">
      <Link to={props.path} className="card-body">
        <div className="card-body">
          <img src={props.image} alt="" width="90%" height="90%"/>
          {/* <h5 className="card-title">{ props.title }</h5> */}
        </div>
      </Link>
    </div>
  )
}

export default Card;
