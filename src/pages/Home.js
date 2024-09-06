import React, { useState } from 'react';

const Home = () => {
  const [nome, setNome] = useState('Fátima');

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <img src="logo.png" alt="Logo" style={{ marginBottom: '20px' }} />
      
      <h2>Olá, {nome}</h2>

      <div style={{
        width: '310px',
        height: '126px',
        borderRadius: '8px',
        backgroundColor: 'rgba(255, 222, 255, 1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: '20px',
      }}>
        <p>Quão preparada você se sente para atuar no mercado de trabalho com as qualificações que possui?</p>
      </div>

      {/* Texto Informativo */}
      <p>Veja o que tem disponível na sua região baseada em seus interesses</p>

      {/* Segunda ZStack - Scrollable */}
      <div style={{ position: 'relative', width: '310px', height: '400px', overflowY: 'auto' }}>
        {[...Array(3)].map((_, index) => (
          <div key={index} style={{
            width: '310px',
            height: '146px',
            borderRadius: '8px',
            backgroundColor: 'rgba(180, 180, 180, 0.3)',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
            position: 'relative'
          }}>
            {/* Data & Mês */}
            <div style={{
              width: '79px',
              height: '146px',
              borderRadius: '8px',
              backgroundColor: 'rgba(133, 56, 255, 1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}>
              <div style={{
                width: '60px',
                height: '146px',
                backgroundColor: 'rgba(133, 56, 255, 1)',
                position: 'absolute',
                right: 0,
              }}></div>
              <p>data</p>
              <p>mês</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botão com Imagem */}
      <div style={{ width: '315px', display: 'flex' }}>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <img src="image.png" alt="Button Image" />
        </button>
      </div>
    </div>
  );
};

export default Home;
