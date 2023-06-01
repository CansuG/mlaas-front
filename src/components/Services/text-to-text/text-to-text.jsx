import React, { useState } from 'react';
import { textToTextGeneration } from '../../../api/service';
import RateService from '../../Ratings/rating';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const TextToText = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await textToTextGeneration(input);
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
          <h1 className="title gradient__text">Text Finder In Sentence</h1>
        </div>
        <div className="description-container">
            <div className="modeldesc">
              <p className="desctext">This is a model under the token classification category. Usually used for sentence parsing, either grammatical, or Named Entity Recognition (NER) to understand keywords contained within text.</p>
              <div className="testinputs">
                <p id="desctextEx">
                  Example: 
                  My name is Sarah Jessica Parker but you can call me Jessica
                </p>
              </div>
            </div>
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
        </div>
        <div className="rate-container">
          <RateService name="Text To Text Generator" />
        </div>
      </div>
    </div>
  );
};

export default TextToText;
