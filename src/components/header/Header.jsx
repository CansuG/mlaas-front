import React from 'react';
import './Header.css'; // import your CSS file

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <h1 className="header-title">ML on Demand</h1>
        <p className="header-description">Variety of machine learning models for your needs.</p>
        {/* Add your header image or animated graphic here */}
      </div>
    </header>
  );
};

export default Header;