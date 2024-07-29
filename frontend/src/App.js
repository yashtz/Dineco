import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {  
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/search" element={<Search />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
