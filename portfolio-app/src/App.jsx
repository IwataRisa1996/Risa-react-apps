import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './pages/Admin';

import "./styles/layout.css";

function HomePage() {
  return (
    <>
      <Hero />
      <Works />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router basename="/Risa-react-apps">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
