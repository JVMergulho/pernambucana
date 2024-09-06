import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/serviceInformation.css'; // Use o mesmo arquivo CSS

const ServiceTemplate = ({ title, logo, subtitle, content }) => {
    const navigate = useNavigate(); 

    return (
      <div className="serviceInformation-container">
        {/* Header com botão de voltar */}
        <div className="header">
          <button onClick={() => navigate(-1)} className="back-button">
            <span className="back-icon">←</span>
            <span className="back-text">Proteção</span>
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
