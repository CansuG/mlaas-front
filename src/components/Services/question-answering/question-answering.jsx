import React, { useState } from 'react';
import "./qa.css";
import { questionAnswering } from '../../../api/service';
import RateService from '../../Ratings/rating';

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
        <h1 className="title gradient__text">Question Answering</h1>
        <form onSubmit={handleSubmit} className="form__container">
        <label className="input__label">
          Question:
          <input type="text" className="input.qa" value={question} onChange={e => setQuestion(e.target.value)} />
        </label>
        &nbsp; &nbsp; 
        <label className="input__label">
          Helper Text:
          <input className="input.qa" type="text" value={text} onChange={e => setText(e.target.value)} />
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