import React, { useState } from 'react';
import { summarizeText } from '../../../api/service';

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
    
      <div>
        <label>
          Input:
          <input type="text" value={input} onChange={e => setInput(e.target.value)} />
        </label>
        <button onClick={handleSubmit}>Calculate</button>
        {response && <p style={{backgroundColor: "#ffffff", color: "#000000", border: "2px solid #000000", borderRadius: "4px", padding: "8px", marginTop: "16px"}}>Output: {response}</p>}
      </div>
    
  );

};

export default Service;