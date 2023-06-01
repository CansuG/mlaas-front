import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import QuestionAnsweringService from './components/Services/question-answering/question-answering';
import GenderClassification from './components/Services/gender-classification/gender-classification';
import SignInUp from './pages/sign-in-up/sign-in-up';
import RateService from './components/Ratings/rating';
import Summarizer from './components/Services/summarizer/summarizer';
import TextGenerator from './components/Services/text-generator/text-generator';
import LabelFinder from './components/Services/label-finder/label-finder';
import Translator from './components/Services/ru-eng-translator/ru-en-translator';
import TextToText from './components/Services/text-to-text/text-to-text';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/home" element={<Navigate to="/" replace />} /> 
        <Route path="/sign-in-up" element={<SignInUp/>} />
        <Route path="/summarize" element={<Summarizer/>}/>
        <Route path ="/question-answering" element={<QuestionAnsweringService/>}/>
        <Route path ="/genderapp" element={<GenderClassification/>}/>
        <Route path ="/rating" element={<RateService/>}/>
        <Route path ="/text-generation" element={<TextGenerator/>}/>
        <Route path ="/label-finder" element={<LabelFinder/>}/>
        <Route path ="/translator" element={<Translator/>}/>
        <Route path ="/text2text" element={<TextToText/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
