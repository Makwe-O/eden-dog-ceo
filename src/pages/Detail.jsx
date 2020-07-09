import React from 'react';

const Detail = ({ match, location }) => {
  return (
    <div className="container">
      <div className="single">
        <div
          style={{ backgroundImage: `url(${location.image})` }}
          className="single__dog single__side"></div>
        <div className="single__side single__text">
          <h1> Doggo {match.params.dogId}</h1>
          {!location.image && (
            <p>
              Please note. If you refresh the page, the data for the image is
              lost because it is not being fetched through an endpoint but
              through the location param from react router dom. There are
              workarounds for this
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
