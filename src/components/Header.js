import React from 'react';
import style from './Header.css';

const Header = ({ children }) => (
  <header className={style.container}>
    <h1 className={`ui header ${style.header}`}>{children}</h1>
  </header>
);

export default Header;
