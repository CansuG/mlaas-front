import React, { useState, useEffect } from 'react';
import { classifyGender } from '../../../api/service';
import './gender-classification.css';
import base64ToImage from '../../../Utilies/show-image';


const GenderClassification = () => {
  const [file, setFile] = useState(null);
  const [predicted_image, setPredicted_image] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    console.log(predicted_image); // Log prediction value whenever it changes
  }, [predicted_image]);

  useEffect(() => {
    const fetchData = async () => {
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        
          const response = await classifyGender(formData).then(
            res => {
                setPredicted_image(res.predicted_image_data);
            }
          ).catch(err => {
            console.log(err)
          });
      
        }
      
    };
    
    fetchData();
    
  }, [file]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <br />
          <br />
          <h3 className="display-8">Gender Classification</h3>
          <p>
            Upload an image (.jpg, .jpeg, .png), our model will detect face first and then predict gender based on face
            (Male or Female)
          </p>
          <form>
            <div className="input-group">
              <input type="file" className="form-control" onChange={handleFileChange} required />
            </div>
          </form>
        </div>
        <div className="col-8">
          {prediction && prediction.length > 0 && (
            <>
              <br />
              <br />
              <h3 className="display-8">Predicted Image</h3>
              <img src={`data:image/jpeg;base64,${predicted_image}`} className="image-fluid" height="100" alt="" />
              <hr />
              <br />
            
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenderClassification;
