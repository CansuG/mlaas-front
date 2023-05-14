import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/register';
import CreateService from './pages/create-service/create-service';
import RateService from './components/Ratings/rating';
import Service from "./components/Services/summarizer/summarizer"
import ServicesList from './components/Services/service-list/service-list';
import QuestionAnsweringService from './components/Services/question-answering/question-answering';
import GenderClassification from './components/Services/gender-classification/gender-classification';
import SignupPage from './pages/signup/signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/create-service" element={<CreateService/>}/>
        <Route path="/summarize" element={<Service/>}/>
        <Route path ="/question-answering" element={<QuestionAnsweringService/>}/>
        <Route path ="/genderapp" element={<GenderClassification/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
