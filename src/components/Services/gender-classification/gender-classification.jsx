import React, { useState } from 'react';
import axios from 'axios';
import { classifyGender } from '../../../api/service';
import './gender-classification.css';
import base64ToImage from '../../../Utilies/show-image';

const GenderClassification = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await classifyGender(formData);
      console.log(response);
      await setPrediction(response.report);
      console.log(prediction);
    } catch (error) {
      console.error(error);
    }
  };

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
              <input onClick={handleSubmit} type="submit" value="Upload & Predict" className="btn btn-outline-primary" />
            </div>
          </form>
        </div>
        <div className="col-8">
          {prediction && prediction.length > 0 && (
            <>
              <br />
              <br />
              <h3 className="display-8">Predicted Image</h3>
              <hr />
              <br />
              <table className="table table-hover table-striped">
                <thead>
                  <tr>
                    <th>Detection Face</th>
                    <th>Eigen Image</th>
                    <th>Prediction Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {prediction.map((element, index) => (
                    <tr key={index}>
                      <td>
                        <img src={base64ToImage(element.gray_image_data)} className="image-fluid" height="100" alt="" />
                      </td>
                      <td>
                        <img src={base64ToImage(element.eig_image_data)} className="image-fluid" height="100" alt="" />
                      </td>
                      <td>{element.gender_name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenderClassification;