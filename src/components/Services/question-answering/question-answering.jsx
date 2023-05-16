import React, { useState } from 'react';
import "./qa.css";
import { questionAnswering } from '../../../api/service';
import RateService from '../../Ratings/rating';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const QuestionAnsweringService = () => {
  const [text, setText] = useState('');
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  console.log("text and question:"+text+" "+question)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const data = await questionAnswering(text, question);
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
        <h1 className="title gradient__text">Question Answering</h1>
        <form onSubmit={handleSubmit} className="form__container">
        <div className="modeldesc">
            <p className="desctext">This model is designed to answer the question you will enter </p>
              <div className="testinputs">
                <p className="desctext">
                  Example Question: Why is model conversion important?
                </p>
                <p className="helpertext">
                Example Helper Text: The option to convert models between FARM and transformers gives freedom to the user and let people easily switch between frameworks.
                </p>
              </div>
          </div>
        
        
        <label className="input__label">
          Question:
          <textarea type="text" className="input_field_qa" value={question} onChange={e => setQuestion(e.target.value)} />
        </label>
       
        <label className="input__label">
          Helper Text:
          <textarea className="input_field_qa" type="text" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <br></br>
     
        <button className="calculate__button"  onClick={handleSubmit}>Compute</button>
        </form>
        {response && (
          <div className="output-container">
            <p className="output__text">Output: {response}</p>
          </div>
        )}
        
      </div>
      <div><RateService name="Question Answerer"/></div>
    </div>
  );

};

export default QuestionAnsweringService;