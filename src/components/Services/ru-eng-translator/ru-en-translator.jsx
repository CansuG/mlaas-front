import React, { useState } from 'react';
import { russianToEnglishTranslator } from '../../../api/service';
import RateService from '../../Ratings/rating';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Translator = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("i"+input)
      const data = await russianToEnglishTranslator(input);
      console.log("data:"+ data)
      setResponse(data);
      console.log("res"+response)
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
          <h1 className="title gradient__text">Russion To English Translator</h1>
        </div>
        <div className="description-container">
            <div className="modeldesc">
              <p className="desctext">It is a Russian-English translation model.</p>
              <div className="testinputs">
                <p id="desctextEx">
                  Example: 
                  С таким количеством различных платформ для маркетинга и продаж, доступных компаниям, неудивительно, что маркетологи обращаются к искусственному интеллекту (ИИ), чтобы помочь им управлять своими кампаниями. ИИ может помочь в создании более эффективных кампаний, объединяя все различные аспекты кампании, от сегментации клиентов до оптимизации медиа и креатива и автоматизации последующих писем и сообщений.
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
          <RateService name="Named Entity Recognition Task" />
        </div>
      </div>
    </div>
  );
};

export default Translator;
