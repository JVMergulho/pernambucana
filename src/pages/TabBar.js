import React from 'react';
import { Link } from 'react-router-dom';

const TabBar = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: '#f0f0f0',
      padding: '10px',
      position: 'fixed',
      bottom: 0,
      width: '100%',
    }}>
      <Link to="/services">Serviços</Link>
      <Link to="/home">Home</Link>
      <Link to="/quiz">Perfil</Link>
    </div>
  );
};

export default TabBar;