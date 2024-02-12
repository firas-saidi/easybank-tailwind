import React from 'react';
import easybankLogo from '../../assets/images/logo.svg';

const DesktopNavbar = () => {
  return (
    <nav className="flex items-center justify-around py-4">
      <div className="cursor-pointer">
        <img src={easybankLogo} alt="manage logo" />
      </div>
      <div>
        <ul className="flex gap-6">
          <li className="navLink">Home</li>
          <li className="navLink">About</li>
          <li className="navLink">Contact</li>
          <li className="navLink">Blog</li>
          <li className="navLink">Careers</li>
        </ul>
      </div>
      <button className="button">Get Started</button>
    </nav>
  );
};

export default DesktopNavbar;
