import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Home from './pages/Home'; // Componente da nova página
import Services from './pages/Services'; // Componente da nova página
import Layout from './pages/Layout'; // Componente da nova página

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

