import React from 'react';
import { Outlet } from 'react-router-dom';
import TabBar from './TabBar'; // Componente da nova página
import helpbig from '../assets/helpbig.svg';
import megafone from '../assets/megafone.svg';
import redsun from '../assets/redsun.svg';

//import TabBar from './TabBar'; // Importe seu componente de Tab Bar

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        {/* O conteúdo das páginas será exibido aqui */}
        <Outlet />
      </div>
      {/* Botão de ajuda fixo */}
      <button style={{
      position: 'fixed',
      bottom: '80px', 
      right: '20px', 
      zIndex: 900, 
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer'
    }}>
      {/* Redsun rotacionando */}
      <img src={redsun} className='redsun' alt="Redsun" style={{
        position: 'fixed',
        bottom: '80px', 
        right: '20px', 
        zIndex: 1,  // Atrás do megafone
        animation: 'rotate 10s linear infinite',  // Rotação contínua
      }} />
      
      {/* Megafone na frente */}
      <img src={megafone} alt="Megafone" style={{
        position: 'fixed',
        bottom: '95px', 
        right: '30px', 
        zIndex: 2,  // Na frente do redsun
      }} />
    </button>
      {/* Tab Bar ficará sempre no final da página */}
      <TabBar />
    </div>
  );
};

export default Layout;
