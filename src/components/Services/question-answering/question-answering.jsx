import React, { useState } from 'react';
import "./qa.css";
import { questionAnswering } from '../../../api/service';

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
    
      <div>
        <label >
          Question:
          <input type="text" value={question} onChange={e => setQuestion(e.target.value)} />
        </label>
        &nbsp; &nbsp; 
        <label>
          Helper Text:
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <br></br>
     
        <button onClick={handleSubmit}>Compute</button>
        {response && <p style={{backgroundColor: "#ffffff", color: "#000000", border: "2px solid #000000", borderRadius: "4px", padding: "8px", marginTop: "16px"}}>Output: {response}</p>}
      </div>
    
  );

};

export default QuestionAnsweringService;