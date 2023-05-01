import React from 'react';
import Header from './Header';
import Navigation from './TopBar';
import ModelCard from './ModelCard';
import ModelImplementation from './ModelImplementation';

const HomePage = ({ loggedIn }) => {
  return (
    <div className="home-page">
      <Header />
      <Navigation loggedIn={loggedIn} />
      <div className="models-section">
        <div className="models-list">
          <ModelCard title="Question Answering" description="Description goes here" image="model1.jpg" />
          <ModelCard title="Language Translation" description="Description goes here" image="model2.jpg" />
          {/* Add more ModelCard components here */}
        </div>
        <div className="model-implementation-section">
          <ModelImplementation title="Selected Model" />
          {/* Add other ModelImplementation components here */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;