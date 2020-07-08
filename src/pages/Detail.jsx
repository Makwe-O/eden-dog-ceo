import React from 'react';

const Detail = ({ match, location }) => {
  console.log(location);

  return (
    <div className="container">
      <div className="single">
        <div
          style={{ backgroundImage: `url(${location.image})` }}
          className="single__dog single__side"></div>
        <h1 className="single__side single__text">
          Doggo {match.params.dogId}
        </h1>
      </div>
    </div>
  );
};

export default Detail;
