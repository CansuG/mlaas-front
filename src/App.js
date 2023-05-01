import './App.css';
import React from 'react';
import Login from './pages/login/login.jsx';
import TopBar from "./components/topbar/TopBar";
import Header from "./components/header/Header";
function App() {
  return (
    <div className="App">
     <div className='gradient__bg'>
       <TopBar/>
       <Header/>
     </div>
    </div>
  );
}

export default App;
