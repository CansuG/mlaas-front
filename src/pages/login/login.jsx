import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/user';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(email, password);
      localStorage.setItem('access_token', response.access_token);
      navigate('/rate-service')
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  const handleRegisterClick = () => {
    navigate('/register')
  };

  return (
    <div className="login">
        <span className="loginTitle">LOGIN</span>
        <form className="loginForm">
            <label>Email</label>
            <input onChange={handleEmailChange} type="text" placeholder="Enter your email..."/>
            <label>Password</label>
            <input onChange={handlePasswordChange} type="password" placeholder="Enter your password..."/>
            <button onClick={handleSubmit} className="loginButton">Login</button>
        </form>
        {error && <div className="error">{error}</div>}
        <button onClick={handleRegisterClick} className="loginRegisterButton">Register</button>
            
        </div>
  );
};

export default Login;