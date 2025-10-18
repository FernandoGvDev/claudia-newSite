import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Home from './pages/Home';
import PaginaSobre from './pages/PaginaSobre';
import FAQPage from './pages/faq'; 

function App(){
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<PaginaSobre />} />
          <Route path="/faq" element={<FAQPage />} /> {/* rota para FAQ */}
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
