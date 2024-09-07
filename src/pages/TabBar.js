import React from 'react';
import { Link } from 'react-router-dom';
import '../style/tabBar.css';
import service from '../assets/tabservice.svg';
import home from '../assets/tabhome.svg';
import pin from '../assets/tabpin.svg';

const TabBar = () => {
  return (
    <div className='tabBar-conteiner'>
      <Link to="/app/services" className='tabBar-item'>
        <img src={service} alt='Serviços' />
        <span>Serviços</span>
      </Link>
      <Link to="/app/home" className='tabBar-item'>
        <img src={home} alt='Sua página' />
        <span>Sua página</span>
      </Link>
      <Link to="/app/nexttome" className='tabBar-item'>
        <img src={pin} alt='Perto de mim' />
        <span>Perto de mim</span>
      </Link>
    </div>
  );
};

export default TabBar;
