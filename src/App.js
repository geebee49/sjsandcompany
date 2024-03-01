import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Services from './components/pages/Services';


function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/sjsandcompany' exact Component={Home}></Route>
          <Route path='/services' exact Component={Services}></Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
