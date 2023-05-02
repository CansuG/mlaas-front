import React from 'react';
import './model.css';

const Model = ({ imgUrl, date,name, text }) => (
  <div className="gpt3__blog-container_model">
    <div className="gpt3__blog-container_model-image">
    </div>
    <div className="gpt3__blog-container_model-content">
      <div>
        <p>{date}</p>
        <h1>{name}</h1>
        <h3>{text}</h3>
      </div>
      <p>rating</p>
    </div>
  </div>
);

export default Model;