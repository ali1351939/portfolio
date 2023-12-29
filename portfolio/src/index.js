// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Projects from './Projects';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './About';
import Activities from './Activities';
import Jobs from './Jobs';
import Education from './Education';
import './styles/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Education" element={<Education />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
