import React from 'react';
import { Link } from 'react-router-dom';
import '../style/tabBar.css';

const TabBar = () => {
  return (
    <div className='tabBar-conteiner'>
      <Link to="/app/services">Serviços</Link>
      <Link to="/app/home">Home</Link>
      <Link to="/app/quiz">Perfil</Link>
    </div>
  );
};

export default TabBar;