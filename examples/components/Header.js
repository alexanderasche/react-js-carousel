import React from 'react';
import logo from '../images/react-logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div>
        <img className="logo" src={logo} />
        <strong><span>React</span></strong> Carousel
      </div>
    </header>
  );
}

export default Header;