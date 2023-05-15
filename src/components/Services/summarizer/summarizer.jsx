import React, { useState } from 'react';
import { summarizeText } from '../../../api/service';
import "./summarizer.css"
import RateService from '../../Ratings/rating';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const Service = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  console.log("input:"+input)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const data = await summarizeText(input);
      setResponse(JSON.stringify(data));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="section">
      <div className="section__margin">
        <div className="home-icon">
          <Link to="/" className="home-icon">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </div>
        <h1 className="title gradient__text">Text Summarizer</h1>
        <form className="form__container">
          <label className="input__label">
            Input:
            <textarea className="input__field" value={input} onChange={e => setInput(e.target.value)} />
          </label>
          <button onClick={handleSubmit} className="calculate__button" type="submit">Submit</button>
        </form>
        {response && (
          <div className="output-container">
            <p className="output__text">Output: {response}</p>
          </div>
        )}
      </div>
      <div><RateService name="Summarizer"/></div>
    </div>
  );
};

export default Service;
