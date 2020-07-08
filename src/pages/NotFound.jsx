import React from 'react';
import notFound from '../assests/404.svg';

const NotFound = () => {
  return (
    <div className="notfound">
      <img src={notFound} alt="not found dog" width="250px" />
      <h3>Woof!!. Sorry that page dosent exist. Try to search for something</h3>
    </div>
  );
};

export default NotFound;
