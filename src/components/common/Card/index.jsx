import React from 'react';

const Card = ({ img }) => {
  return (
    <div className="card">
      <img src={img} alt="image of dog" />
    </div>
  );
};

export default Card;
