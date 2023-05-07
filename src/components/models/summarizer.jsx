import React, { useState } from 'react';

const Summarizer = () => {
  const [inputText, setInputText] = useState("");
  const [summaryText, setSummaryText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Make a request to the backend API to get the summarized text
    const response = await fetch('http://127.0.0.1:5000/services/summarize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: inputText })
    });

    const data = await response.json();

    // Update the summaryText state with the data returned from the backend
    setSummaryText(data.summarize_text);
  }

  return (
    <div className="summarizer-container">
      <h1>Summarizer</h1>
      <div className="col">
        <form onSubmit={handleSubmit}>
          <label htmlFor="input_text">Input Text:</label>
          <input type="text" id="input_text" name="inputText" value={inputText} onChange={(e) => setInputText(e.target.value)} /><br /><br />
          <button type="submit">Summarize</button>
        </form>
      </div>

      <div className="col">
        {summaryText && <p>The output text is: {summaryText}</p>}
      </div>
    </div>
  );
};

export default Summarizer;
