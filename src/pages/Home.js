import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question'; // Estilos para o Popup
import PersonalizedServices from './PersonalizedServices';
import logo from "../assets/logo.svg";
import iconloc from "../assets/iconloc.svg";
import '../style/home.css';

const Home = () => {
  const navigate = useNavigate();
  
  const [nome, setNome] = useState('Fátima');

  // Estado para armazenar os dados dos cards
  const [cards, setCards] = useState([
    {
      id: 1,
      date: '10',
      month: 'NOV',
      title: 'CURSOS PROFISSIONALIZANTES',
      description: 'A Sec Mulher PE vai promover cursos relacionados à culinária.',
      location: 'Casa Zero - Recife Antigo',
    },
    {
      id: 2,
      date: '16',
      month: 'NOV',
      title: 'RODA DE CONVERSA: EU MULHER!',
      description: 'Karina Dias, mãe atípica e empreendedora conversará com mulheres da entre a pulso',
      location: 'Espaço Tech - Recife Antigo',
    },
    {
      id: 3,
      date: '19',
      month: 'NOV',
      title: 'PALESTRA SOBRE INOVAÇÃO',
      description: 'Entenda como a inovação está mudando o mercado.',
      location: 'Centro de Eventos - Recife',
    }
  ]);

  // Função para adicionar um novo card (exemplo)
  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      date: '11',
      month: 'NOV',
      title: 'NOVO EVENTO',
      description: 'Descrição do novo evento.',
      location: 'Novo Local - Recife',
    };
    setCards([...cards, newCard]);
  };

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={logo} alt="logo" className="logo4" />

      <div>
        <p>
          Olá, <span style={{ fontWeight: 'bold' }}>{nome}</span>
        </p>
      </div>

      <Question />

      <p className='section-title'>Acesse os serviços</p>

      <PersonalizedServices />

      <p className='section-title'>Baseada em seus interesses</p>

      {/* Eventos */}
      <div style={{ position: 'relative', width: '310px', height: '400px', overflowY: 'auto' }}>
        {cards.map((card) => (
          <div key={card.id} style={{
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
              <p style={{ margin: 0, fontSize: '40px', color: 'white', fontWeight: 'bold' }}>{card.date}</p>
              <p style={{ margin: 0, fontSize: '19px', color: 'white', fontWeight: 'bold' }}>{card.month}</p>
            </div>

            <div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold' }}>{card.title}</h4>
              <p style={{ fontSize: '12px' }}>{card.description}</p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={iconloc} alt="Localização" />
                <p style={{ fontSize: '12px', marginLeft: '5px' }}>{card.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botão com Imagem */}
      <div style={{ width: '315px', display: 'flex' }}>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={addCard}>
          <img src="image.png" alt="Button Image" />
        </button>
      </div>
    </div>
  );
};

export default Home;
