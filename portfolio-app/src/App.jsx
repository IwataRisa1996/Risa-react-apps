import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './pages/Admin';

import "./styles/layout.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Works />
              <Contact />
            </>
          }
        />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
}
//ヘッダー部のリンクのパス
//pathが叩かれたときに呼び出される関数

export default App;