// ServicoMacro.js
import React from 'react';
import '../style/serviceMacro.css'; // Arquivo CSS para estilos
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logopinkreverse.svg';
import iconwoman from '../assets/iconwomanpurple.svg';
import arrow from '../assets/arrow.svg';
import backarrow from '../assets/backarrow.svg';
import search from '../assets/searchicon.svg'; // Importar a imagem

const ServicoMacro = () => {
  const navigate = useNavigate();

  return (
    <div className="servico-macro-container">
      <div className="servico-macro-header">
        <button className="servico-macro-back-button" onClick={() => navigate(-1)}>
          <img src={backarrow} alt="Nossos serviços" />
          <span>Nossos serviços</span>
        </button>
        <img className="search-icon" style={{ width: '28px', height: '28px' }} src={search} alt="Busca" />
      </div>

      <div className="servico-macro-content">
        <div className="servico-macro-title">
          <img src={iconwoman} alt="Proteção" />
          <span>Proteção </span>
        </div>
        <p className="servico-macro-description">
          Conheça as Iniciativas de Proteção e Suporte para Mulheres em Situação de Violência em Pernambuco.
        </p>

        <div className="servico-macro-cards">
          {[
            {
              title: '190 MULHER',
              description: 'Atendimento prioritário para mulheres sob risco de violência doméstica e familiar.',
            },
            {
              title: 'ABRIGOS TEMPORÁRIOS',
              description: 'Acolhimento em abrigos sigilosos para mulheres sob risco de morte devido à violência doméstica.',
            },
            {
              title: 'PATRULHA MARIA DA PENHA',
              description: 'Atendimento especializado e preventivo da Polícia Militar para acompanhar mulheres que solicitaram Medidas Protetivas de Urgência.',
            },
            {
              title: 'MONITORAMENTO ELETRÔNICO',
              description: 'Atendimento prioritário para mulheres sob risco de violência doméstica e familiar.',
            }
          ].map((card, index) => (
            <div key={index} className="servico-macro-card">
              <div className="servico-macro-card-header">
                <img src={logo} alt={card.title} />
                <span>{card.title}</span>
              </div>
              <p className="servico-macro-card-description">{card.description}</p>
              <button className="servico-macro-more-button" onClick={() => { navigate('/app/serviceInformation') }}>
                <span>SAIBA MAIS</span>
                <img src={arrow} alt="Seta" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicoMacro;
