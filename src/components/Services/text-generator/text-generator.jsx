import React, { useState } from 'react';
import { generateText } from '../../../api/service';
import RateService from '../../Ratings/rating';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const TextGenerator = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(input)
      const data = await generateText(input);
      console.log("data"+data)
      setResponse(data);
      console.log(response)
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
          <h1 className="title gradient__text">Text Generator</h1>
        </div>
        <div className="description-container">
            <div className="modeldesc">
              <p className="desctext">This model is designed to continue text from a prompt.</p>
              <div className="testinputs">
                <p id="desctextEx">
                  Example: 
                  The answer to the universe is
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
          <RateService name="Text Generator" />
        </div>
      </div>
    </div>
  );
};

export default TextGenerator;
