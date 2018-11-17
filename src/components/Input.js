import React from 'react';

const Input = ({ onChange, required, type, placeholder, value }) => 
  <input
    onChange={onChange}
    required={required}
    type={type}
    placeholder={placeholder}
    value={value}
  />;

export default Input;
