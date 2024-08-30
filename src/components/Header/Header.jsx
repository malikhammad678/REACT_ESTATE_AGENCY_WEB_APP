import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <section className="h_wrapper">
      <div className="paddings h_container">
        <img src="./logo.png" alt="logo" width={100} />
        <div className={`flexCenter h_menu ${openMenu ? "open" : ""}`}>
          <a href="#">Residencies</a>
          <a href="#">Value</a>
          <a href="#">Contact us</a>
          <a href="#">Get Started</a>
          <button className='button'>
            <a href="#">Contact</a>
          </button>
        </div>
        <div className="menu_btn" onClick={() => setOpenMenu((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;
