import React from 'react';
import { useState, useEffect } from 'react';
import Model from '../../components/model/Model';
import './models.css';
import { getServices } from '../../api/service';


const Models = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getServices();
      setServices(response);
    }
    fetchData();
  }, []);

  return (
    <div className="gpt3__blog section__padding" id="models">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">Try it, <br /> Most in demand models.</h1>
      </div>
      <div className="gpt3__blog-container">

        <div className="gpt3__blog-container_groupA">
        </div>

        <div className="gpt3__blog-container_groupB">
          {
            services.map(service => (
              <Model date={service.created_at} name={service.name} text={service.description} />
            ))
          }
        </div>
        
      </div>
    </div>
    );
};

export default Models;