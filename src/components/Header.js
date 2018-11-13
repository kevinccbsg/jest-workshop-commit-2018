import React from 'react';
import style from './Header.css';

const Header = () => (
  <header className={style.container}>
    <h1 class={`ui header ${style.header}`}>H1</h1>
  </header>
);

export default Header;
