import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Home from './pages/Home'; // Componente da nova página
import Login from './pages/Login'; // Componente da nova página
import ServiceInformation from './pages/ServiceInformation'; // Componente da nova página
import ServiceMacro from './pages/ServiceMacro' // Componente da nova página
import Layout from './pages/Layout'; // Componente da nova página
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/app" element={<Layout />}>
            <Route path="/app/serviceMacro" element={<ServiceMacro />} />
            <Route path="/app/quiz" element={<Quiz />} />
            <Route path="/app/home" element={<Home />} />
            <Route path="/app/services" element={<ServiceInformation />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

