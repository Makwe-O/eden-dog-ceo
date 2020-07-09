import React from 'react';

const Button = ({ text, btnStyle, onClick, disabled }) => {
  return (
    <button className={btnStyle} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
