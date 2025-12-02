import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import PaginaSobre from './pages/PaginaSobre';
import Footer from "./components/Footer";
import Header from "./components/Header"

function App(){
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<PaginaSobre />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
