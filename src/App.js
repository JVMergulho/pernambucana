import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Home from './pages/Home'; // Componente da nova página
import Services from './pages/Services'; // Componente da nova página
import Layout from './pages/Layout'; // Componente da nova página
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/app" element={<Layout />}>
            <Route path="/app/quiz" element={<Quiz />} />
            <Route path="/app/home" element={<Home />} />
            <Route path="/app/services" element={<Services />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

