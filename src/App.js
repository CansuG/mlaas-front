import './App.css';
import React from 'react';
import Login from './pages/login/login.jsx';
import TopBar from "./components/topbar/TopBar";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import Models from "./components/models/Models"
function App() {
  return (
    <div className="App">
     <div className='gradient__bg'>
       <TopBar/>
       <Header/>
       <div>
         <Models/>
       <Footer/></div>
     </div>
    </div>
  );
}

export default App;
