import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { createService } from '../../api/service';
import { useNavigate } from 'react-router-dom';

const CreateService = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [modelName, setModelName] = useState('');
  const [modelType, setModelType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCreateService = async (event) => {
    event.preventDefault();
    try {
      const service = await createService(name, description, modelName, modelType);
      // do something with the created service, such as redirect to the service list page
      navigate('/')
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create a new service</h2>
      <Form onSubmit={handleCreateService}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter service name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter service description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicModelName">
          <Form.Label>Model Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter model name"
            value={modelName}
            onChange={(event) => setModelName(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicModelType">
          <Form.Label>Model Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter model type"
            value={modelType}
            onChange={(event) => setModelType(event.target.value)}
            required
          />
        </Form.Group>
        {errorMessage && (
          <Alert variant="danger">{errorMessage}</Alert>
        )}
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateService;