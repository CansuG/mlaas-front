import React, { useState } from 'react';
import { rateService } from '../../api/userRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './rating.css'
import { getCurrentUser } from '../../api/user';

const RateService = ({name}) => {
  
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRateService = async (event) => {
    event.preventDefault();
    try {
      const accessToken = localStorage.getItem('access_token');
      const user = await getCurrentUser(accessToken);
      if (!accessToken || !user) {
        window.alert('You need to login to rate this service');
        return;
      }
      await rateService(name, rating, accessToken);
      // do something after successful rating, such as updating the service's rating or displaying a success message
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating.toString());
  };

  const handleStarHover = (hoveredRating) => {
    setHoveredRating(hoveredRating);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };

  const isStarFilled = (star) => {
    return star <= rating || star <= hoveredRating;
  };

  return (
    <div className="">
     
      <form onSubmit={handleRateService}>
        <div className="rating-div">
          <label htmlFor="rating" className="form-label">
            Rating (1-5)
          </label>
          <div className="rating-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <FontAwesomeIcon
                key={star}
                icon={faStar}
                className={
                  star <= rating || star <= hoveredRating
                    ? 'star star-filled'
                    : 'star'
                }
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => handleStarHover(star)}
                onMouseLeave={handleStarLeave}
              />
            ))}
          </div>
        </div>
        {errorMessage && (
          <div className="token-expired-error" >
            {errorMessage}
          </div>
        )}
        <button className="rate__button" type="submit" >
          Rate
        </button>
      </form>
    </div>
  );
};

export default RateService;