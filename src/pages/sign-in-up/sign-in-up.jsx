import { useEffect } from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api/user';
import { login } from '../../api/user';
import './sign-in-up.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const SignInUp = () => {
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
    
    const handleSignIn = async (e) => {
      e.preventDefault();
  
      try {
        const response = await login(email, password);
        localStorage.setItem('access_token', response.access_token);
        navigate('/home')
      } catch (error) {
        setError('Invalid email or password');
      }
    };

    const handleSignUp = async (e) => {
      e.preventDefault();
  
      try {
        await register(email, password, fullName);
      } catch (error) {
        setError(error);
      }
    };

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const signUpButton2 = document.getElementById('signUp2');

        const container = document.getElementById('container');
    
        signUpButton.addEventListener('click', () => {
          container.classList.add("right-panel-active");
        });
    
        signInButton.addEventListener('click', () => {
          container.classList.remove("right-panel-active");
        });

        signUpButton2.addEventListener('click', () => {
          container.classList.remove("right-panel-active");
        });
      }, []);

  return (
    <div className="home-body">
    <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form action="#" className="sign-in-up-form">
          <h1 className="header">Create Account</h1>
          <div className="social-container">
            <a className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a className="social"><FontAwesomeIcon icon={faGoogle} /></a>
            <a className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
          <span className="info">or use your email for registration</span>
          <input type="text" placeholder="Full Name" onChange={handleFullNameChange} required />
          <input type="email" placeholder="Email"  onChange={handleEmailChange} required />
          <input type="password" placeholder="Password" onChange={handlePasswordChange} required />
          <button className="main-button" id="signUp2" onClick={handleSignUp} >Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#"  className="sign-in-up-form">
          <h1 className="header">Sign in</h1>
          <div className="social-container">
          <a className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a className="social"><FontAwesomeIcon icon={faGoogle} /></a>
            <a className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
          <span className="info">or use your account</span>
          <input type="email" placeholder="Email" onChange={handleEmailChange} required />
          <input type="password" placeholder="Password" onChange={handlePasswordChange} required />
          <a href="#" className="forgotpass">Forgot your password?</a>
          <button className="main-button" onClick={handleSignIn}>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <div id="home-icon-sign-up">
              <Link to="/" className="home-icon">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </div>
            <h1 className="overlay-h1">Welcome Back!</h1>
            <p className="desc">To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <div id="home-icon-sign-in">
              <Link to="/" className="home-icon">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </div>
            <h1 className="overlay-h1">Hello, Friend!</h1>
            <p className="desc">Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    
    </div>
    </div>
  );
}

export default SignInUp;
