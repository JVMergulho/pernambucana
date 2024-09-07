import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question'; // Estilos para o Popup
import PersonalizedServices from './PersonalizedServices';
import logo from "../assets/logo.svg"
import iconloc from "../assets/iconloc.svg"
import '../style/home.css';

const Home = () => {
  const navigate = useNavigate();
  
  const [nome, setNome] = useState('Fátima');

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={logo} alt="logo" className="logo4" />

      <h2 style={{ fontSize: '24px' }}>
        Olá, <span style={{ fontWeight: 'bold' }}>{nome}</span>
      </h2>

      <Question />

      <p className='section-title'>Acesse os serviços</p>

      <PersonalizedServices />

      <p className='section-title'>Baseada em seus interesses</p>

      {/* Eventos */}
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
            position: 'relative',
          }}>
            {/* Data e Mês */}
            <div style={{
              width: '79px',
              height: '146px',
              borderTopLeftRadius: '8px',
              borderBottomLeftRadius: '8px',
              backgroundColor: 'rgba(133, 56, 255, 1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              marginRight: '10px',
            }}>
              <p style={{ margin: 0, fontSize: '40px', color: 'white', fontWeight: 'bold' }}>08</p>
              <p style={{ margin: 0, fontSize: '19px', color: 'white', fontWeight: 'bold' }}>NOV</p>
            </div>

            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold' }}>CURSOS PROFISSIONALIZANTES</h4>
              <p style={{ fontSize: '12px' }}>A Sec Mulher PE vai promover cursos relacionados à culinária.</p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src= { iconloc } alt="Localização" />
                <p style={{ fontSize: '12px', marginLeft: '5px' }}>Casa Zero - Recife Antigo</p>
              </div>
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
