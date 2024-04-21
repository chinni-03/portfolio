import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import About from './components/About';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;