import React from 'react';

const ErrorBoundary = ({ error }) => {
  console.log(error?.response?.status);
  let response;

  if (error?.response?.status === 404) {
    response = 'Could not find that breed. Try searching for something else';
  } else if (error?.request) {
    response =
      'Oops its not you its us. Try checking your internet connection tho';
  } else {
    response = 'An error occured';
  }
  return <div>{response}</div>;
};

export default ErrorBoundary;
