import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './topbar.css';


const TopBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img/>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Models</a></p>
          <p><a href="#possibility">About Us</a></p>
          <p><a href="#features">Contact Us</a></p>
          <p><a href="#blog">Settings</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Login</p>
        <button type="button">Register</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">Models</a></p>
            <p><a href="#possibility">About Us</a></p>
            <p><a href="#features">Contact Us</a></p>
            <p><a href="#blog">Settings</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Login</p>
            <button type="button">Register</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default  TopBar;