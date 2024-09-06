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
      <Link to="/app/services">Serviços</Link>
      <Link to="/app/home">Home</Link>
      <Link to="/app/quiz">Perfil</Link>
    </div>
  );
};

export default TabBar;