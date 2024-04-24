import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile'; // Assume you have a Profile component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Include Navbar at the top */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
