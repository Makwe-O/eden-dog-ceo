import React from 'react';
const Input = ({ type = 'text', onChange, value, placeholder }) => {
  return (
    <input
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
