import React from "react";

import Logo from '../assets/logo.svg';
import Variables from '../css/Variables.scss'
import '../css/Header.scss';

const Header = () => {
  return (
    <header className="Header">
      <figure className="Header__image">
        <img src={Logo} alt="logo" />
      </figure>
    </header>
  )
}

export default Header;