import React, { useState } from 'react';
import { textToTextGeneration } from '../../../api/service';
import RateService from '../../Ratings/rating';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const TextToText = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState([]);

  const getEntityLabel = (entity) => {

    if (entity.entity_group === 'PER') {
      return 'PERSON';
    } else if(entity.entity_group === 'ORG'){
      return 'ORGANIZATION';
    } else if(entity.entity_group === 'LOC'){
      return 'LOCATION';
    } else if(entity.entity_group === 'DATE'){
      return 'DATE';
    } else if(entity.entity_group === 'TIME'){
      return 'TIME';
    } else if(entity.entity_group === 'MONEY'){
      return 'MONEY';
    } else if(entity.entity_group === 'PERCENT'){
      return 'PERCENT';
    } else if(entity.entity_group === 'PROD'){
      return 'PRODUCT';
    }

    return entity.entity_group.charAt(0).toUpperCase() + entity.entity_group.slice(1);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await textToTextGeneration(input);
      setResponse(data);
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
          <h1 className="title gradient__text">Entity Finder In Sentence</h1>
        </div>
        <div className="description-container">
          <div className="modeldesc">
            <p className="desctext">This is a model that finds the entities in sentences.</p>
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
                <textarea className="input__field" value={input} onChange={(e) => setInput(e.target.value)} />
              </label>
              <button onClick={handleSubmit} className="calculate__button" type="submit">
                Submit
              </button>
            </div>
            {response.length > 0 && (
              <div className="output-container">
                <p className="output__text">Output:</p>
                <ul className="entity-list">
                  {response.map((entity, index) => (
                    <li key={index} className="entity-item">
                      {getEntityLabel(entity)}: {entity.word}
                    </li>
                  ))}
                </ul>
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
