import React, { useState } from 'react';
import { summarizeText } from '../../../api/service';
import "./summarizer.css"

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
     
        <h1 className="title gradient__text">Text Summarizer</h1>
        <form onSubmit={handleSubmit} className="form__container">
          <label className="input__label">
            Input:
            <textarea className="input__field" value={input} onChange={e => setInput(e.target.value)} />
          </label>
          <button className="calculate__button" type="submit">Calculate</button>
        </form>
        {response && (
  <div className="output-container">
    <p className="output__text">Output: {response}</p>
  </div>
)}
    
      </div>
    </div>

  );
};

export default Service;
