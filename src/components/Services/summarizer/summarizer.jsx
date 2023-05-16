import React, { useState } from 'react';
import { summarizeText } from '../../../api/service';
import "./summarizer.css";
import RateService from '../../Ratings/rating';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

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
        <div className="header">
          <div className="home-icon">
            <Link to="/" className="home-icon">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </div>
          <h1 className="title gradient__text">Text Summarizer</h1>
        </div>
        <div className="content-container">
          <form className="form__container">
            <div className="input-container">
              <label className="input__label">
                Input:
                <textarea className="input__field" value={input} onChange={e => setInput(e.target.value)} />
              </label>
              <button onClick={handleSubmit} className="calculate__button" type="submit">Submit</button>
            </div>
            {response && (
              <div className="output-container">
                <p className="output__text">Output: {response}</p>
              </div>
            )}
          </form>
          <div className="description-container">
            <div className="modeldesc">
              <p className="desctext">This model is designed to summarize the output you will enter into the input field given below.</p>
              <div className="testinputs">
                <p className="desctext">
                  Example: 
                  Technology's rapid advancements have transformed our lives, offering endless possibilities and challenges. As we navigate this ever-changing landscape, striking a balance between embracing its benefits and addressing ethical concerns becomes crucial for a positive future.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rate-container">
          <RateService  />
        </div>
      </div>
    </div>
  );
};

export default Service;
