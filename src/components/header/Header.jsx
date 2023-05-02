import React from 'react';


import './Header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">ML on Demand</h1>
      <p>Variety of Machine Learning Models for your needs.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Subscribe</button>
      </div>

      <div className="gpt3__header-content__people">
        
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
   
    </div>
  </div>
);

export default Header;