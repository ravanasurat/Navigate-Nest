import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Career from './pages/Career';
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthProvider } from './contexts/AuthContext';
import Blogs from './pages/Blogs';
import  Calculator from './pages/Calculator';
import  AboutUs from './pages/AboutUs';
import Mentor from './pages/Mentor';
import ContactUs from './pages/ContactUs';
import Profile from './pages/Profile';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Career" element={<Career />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Calculator" element={<Calculator/>} />
            <Route path="/AboutUs" element={<AboutUs/>} />
            <Route path="/Mentor" element={<Mentor/>} />
            <Route path="/ContactUs" element={<ContactUs/>} />
            <Route path="/Profile" element={<Profile/>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;