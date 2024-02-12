import React from 'react';
import { GrClose } from 'react-icons/gr';
import easybankLogo from '../../../assets/images/logo.svg';

const OpenedNavbar = ({ setIsNavbarOpened }) => {
  const closeNavbar = () => {
    // enable scroll when modal is closed
    document.body.style.overflow = 'unset';
    setIsNavbarOpened(false);
  };

  return (
    <nav>
      <section className="absolute inset-0 bg-black/30">
        <div className="mx-2 mt-2 flex items-center justify-around rounded-t-md bg-white py-4">
          <div className="cursor-pointer">
            <img src={easybankLogo} alt="manage logo" />
          </div>
          <div className="cursor-pointer text-3xl" onClick={closeNavbar}>
            <GrClose />
          </div>
        </div>
        <div className="mx-2 rounded-b-md bg-white">
          <ul className="py-4">
            <li className="navLink mb-6 text-black">Home</li>
            <li className="navLink mb-6 text-black">About</li>
            <li className="navLink mb-6 text-black">Contact</li>
            <li className="navLink mb-6 text-black">Blog</li>
            <li className="navLink mb-6 text-black">Careers</li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default OpenedNavbar;
