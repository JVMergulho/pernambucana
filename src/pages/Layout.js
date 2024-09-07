import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TabBar from './TabBar';
import helpbig from '../assets/helpbig.svg';
import megafone from '../assets/megafone.svg';
import redsun from '../assets/redsun.svg';

const Layout = () => {
  const [buttonImage, setButtonImage] = useState(megafone);
  const [wasPressed, setWasPressed] = useState(false);

  // Função para trocar a imagem quando o botão é clicado
  const handleButtonClick = () => {
    setWasPressed(true); // Altera para true quando o botão é pressionado
    setButtonImage(helpbig); // Altera a imagem para helpbig
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        {/* O conteúdo das páginas será exibido aqui */}
        <Outlet />
      </div>

      {/* Botão de ajuda fixo */}
      <button 
        onClick={handleButtonClick} // Chama a função ao clicar
        style={{
          position: 'fixed',
          bottom: '80px', 
          right: '20px', 
          zIndex: 900, 
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        {/* Condicional para exibir o Redsun rotacionando */}
        {!wasPressed && (
          <img src={redsun} className='redsun' alt="Redsun" style={{
            position: 'fixed',
            bottom: '80px', 
            right: '20px', 
            zIndex: 1,  // Atrás do megafone/helpbig
            animation: 'rotate 10s linear infinite',  // Rotação contínua
          }} />
        )}
        
        {/* Megafone ou helpbig dependendo do estado */}
        <img src={buttonImage} alt="Help/Megafone" style={{
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
