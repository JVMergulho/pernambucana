import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/serviceInformation.css'; // Use o mesmo arquivo CSS
import backarrow from '../assets/backarrow.svg';

const ServiceTemplate = ({ title, logo, subtitle, content }) => {
    const navigate = useNavigate(); 

    return (
      <div className="serviceInformation-container">
        {/* Header com botão de voltar */}
        <div className="header">
          <button className="servico-macro-back-button" onClick={() => navigate(-1)}>
            <img src={backarrow} alt="Nossos serviços" />
            <span>Proteção</span>
          </button>
        </div>
  
        {/* Título da página */}
        <div className="title">
          <h1 className="main-title">{title}</h1>
          <div className="title-row">
            <img src={logo} alt="logo" className="logo" />
          </div>
        </div>
  
        {/* Descrição */}
        <p className="subtitle">
          {subtitle}
        </p>
  
        {/* Conteúdo da lista em Scroll */}
        <div className="content">
          {content}
        </div>
      </div>
    );
};

export default ServiceTemplate;
