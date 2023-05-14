import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './model.css';
import { getRatings } from '../../api/userRating';

const Model = ({date, name, text }) => {
  const navigate = useNavigate();
  const [ratings, setRatings] = useState([]);
  const [avrRating, setAvrRating] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await getRatings();
      setRatings(response);
    }
    fetchData();
  }, []);

  useEffect(()=>{
    const ratingSum = ratings
      .filter((rating) => rating.service_name === name) // Filter ratings by name
      .reduce((sum, rating) => sum + parseInt(rating.rating), 0);

    const filteredRatings = ratings.filter((rating) => rating.service_name === name);
    const averageRating = filteredRatings.length > 0 ? ratingSum / filteredRatings.length : 0;
    setAvrRating(averageRating);
    
  },[ratings]);

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  const handleModel = async () => {
    if (name === 'Summarizer') {
      navigate('/summarize');
    } else if (name === 'Question Answerer'){
      navigate('/question-answering')
    } else if(name ==='Gender Classifier'){
      navigate('/genderapp')
    }
  }

  return (
  <div className="gpt3__blog-container_model">
    <div className="gpt3__blog-container_model-image">
    </div>
    <div className="gpt3__blog-container_model-content">
      <div>
        <p>{formattedDate}</p>
        <h1>{name}</h1>
        <h3>{text}</h3>
        <button onClick={handleModel} id="model_button">Go To Model</button>
      </div>
      <p>Average Rating: {avrRating}</p>
    </div>
  </div>
  );
  };

export default Model;