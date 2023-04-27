import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api/user';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(email, password, fullName);
      navigate('/login');
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" value={fullName} onChange={handleFullNameChange} required />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;