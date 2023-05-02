import React from 'react';
import { useState, useEffect } from 'react';
import { getServices } from '../../../api/service';

function ServicesList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getServices();
      setServices(response);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>All Services</h2>
      <ul style={{listStyleType: 'none', padding: 0}}>
        {services.map(service => (
          <li key={service._id} style={{padding: '10px'}}>
            <span style={{color: '#fff', fontWeight: 'bold'}}>{service.name}</span>
            <div style={{color: '#ccc'}}>{service.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesList;