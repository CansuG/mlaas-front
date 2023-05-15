import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './topbar.css';
import { getCurrentUser, logout } from '../../api/user';
import { useNavigate } from 'react-router-dom';



const TopBar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      fetchUserName(token);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const fetchUserName = async (token) => {
    try {
      const user = await getCurrentUser(token);
      setName(user.full_name);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error fetching user:', error);
      setIsLoggedIn(false);
    }
  };

  const handleLogout = async() => {
    console.log(localStorage.getItem('access_token'))
    await logout(localStorage.getItem('access_token'));
    localStorage.removeItem('access_token')
    setIsLoggedIn(false);
  };

  const handleRegisterClick = () => {
    navigate('/sign-in-up')
  };

  const handleLoginClick = () => {
    navigate('/sign-in-up')
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src='assets/technology.png'/>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#models">Models</a></p>
          <p><a href="#aboutapp">About Us</a></p>
          <p><a href="#contactus">Contact Us</a></p>
        </div>
      </div>
      {isLoggedIn ? (
        <div className="gpt3__navbar-user">
          <div className="gpt3__navbar-user-dropdown">

            <p className="gpt3__navbar-username">{name}</p>
            <button className="gpt3__navbar-logout-btn" onClick={handleLogout}>Logout</button>
            
          </div>
        </div>
      ) : (
        <div className="gpt3__navbar-sign">
          <p onClick={handleLoginClick}>Login</p>
          <button onClick={handleRegisterClick} type="button">Register</button>
        </div>
      )}
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#models">Models</a></p>
            <p><a href="#aboutapp">About Us</a></p>
            <p><a href="#contactus">Contact Us</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default  TopBar;