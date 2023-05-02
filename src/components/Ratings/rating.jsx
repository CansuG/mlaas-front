import React, { useState } from 'react';
import { rateService } from '../../api/userRating';
import {useEffect} from 'react';
const RateService = () => {
  
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRateService = async (event) => {
    event.preventDefault();
    try {
      await rateService("Summarizer", rating, localStorage.getItem('access_token'));
      
      // do something after successful rating, such as updating the service's rating or displaying a success message
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Rate a service</h2>
      <form onSubmit={handleRateService}>
        <div className="mb-3">
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating (1-5)
          </label>
          <input
            type="number"
            className="form-control"
            id="rating"
            placeholder="Enter rating (1-5)"
            min="1"
            max="5"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            required
          />
        </div>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RateService;