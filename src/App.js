import React, { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
//COMPONENTS
import Login from './components/Login';
import Home from './components/Home';

function App() {
  
  return (
   <Router>
      <div className='bg-black-bg min-h-screen'>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />}/>
        </Routes>
      </div>
   </Router>
  );
}

export default App;
