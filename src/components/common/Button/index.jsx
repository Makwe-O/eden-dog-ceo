import React from 'react';

const Button = ({ text, btnStyle, onClick }) => {
  return (
    <button className={btnStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
