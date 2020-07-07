import React from 'react';

const Detail = ({ match }) => {
  return (
    <div>
      <h1>Detail Page {match.params.dogId}</h1>
    </div>
  );
};

export default Detail;
