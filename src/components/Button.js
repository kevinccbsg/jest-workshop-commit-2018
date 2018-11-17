import React from 'react';

const Button = ({ className, children, onClick, value }) => 
  <button className={className} onClick={() => onClick(value)}>{children}</button>;

export default Button;
