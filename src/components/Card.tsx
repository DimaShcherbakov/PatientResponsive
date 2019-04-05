import React from 'react';

interface IProps {
  title: string;
}

const Card = (props: IProps) => {
  return(
    <div className="card my-3 mx-2">
      <div className="card-body">
        <h5 className="card-title">{ props.title }</h5>
      </div>
    </div>
  )
}

export default Card;
