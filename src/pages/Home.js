// Home.js
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

  const [cards, setCards] = useState([
    {
      id: 1,
      date: '09',
      month: 'NOV',
      title: 'CURSOS PROFISSIONALIZANTES',
      description: 'A Sec Mulher PE vai promover cursos relacionados à culinária.',
      location: 'Casa Zero - Recife Antigo',
    },
    {
      id: 2,
      date: '12',
      month: 'NOV',
      title: 'RODA DE CONVERSA: EU MULHER!',
      description: 'Karina Dias, mãe atípica e empreendedora conversará com mulheres da entre a pulso',
      location: 'Espaço Tech - Recife Antigo',
    },
    {
      id: 3,
      date: '11',
      month: 'NOV',
      title: 'PALESTRA SOBRE INOVAÇÃO',
      description: 'Entenda como a inovação está mudando o mercado.',
      location: 'Centro de Eventos - Recife',
    }
  ]);

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
      <div className="event-container">
        {cards.map((card) => (
          <div key={card.id} className="event-card">
            <div className="event-date">
              <p className="date">{card.date}</p>
              <p className="month">{card.month}</p>
            </div>

            <div className="event-content">
              <h4 className="event-title">{card.title}</h4>
              <p className="event-description">{card.description}</p>
              <div className="event-location">
                <img src={iconloc} alt="Localização" />
                <p>{card.location}</p>
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
