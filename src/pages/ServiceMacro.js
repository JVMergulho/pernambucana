import React from 'react';
import '../style/serviceMacro.css'; // Arquivo CSS para estilos

const ServicoMacro = () => {
  return (
    <div className="servico-macro-container">
      <div className="servico-macro-header">
        <button className="servico-macro-back-button" onClick={() => { /* Lógica para voltar para a página de serviços */ }}>
          <img src="/path/to/stladin.png" alt="Nossos serviços" />
          <span>Nossos serviços</span>
        </button>
      </div>

      <div className="servico-macro-content">
        <div className="servico-macro-title">
          <img src="/path/to/iconmulherp.png" alt="Proteção" />
          <span>PROTEÇÃO</span>
        </div>
        <p className="servico-macro-description">
          Conheça as Iniciativas de Proteção e Suporte para Mulheres em Situação de Violência em Pernambuco.
        </p>

        <div className="servico-macro-cards">
          {[
            {
              title: '190 MULHER',
              description: 'Atendimento prioritário para mulheres sob risco de violência doméstica e familiar.',
              image: '/path/to/simbometade.png'
            },
            {
              title: 'ABRIGOS TEMPORÁRIOS',
              description: 'Acolhimento em abrigos sigilosos para mulheres sob risco de morte devido à violência doméstica.',
              image: '/path/to/simbometade.png'
            },
            {
              title: 'PATRULHA MARIA DA PENHA',
              description: 'Atendimento especializado e preventivo da Polícia Militar para acompanhar mulheres que solicitaram Medidas Protetivas de Urgência.',
              image: '/path/to/simbometade.png'
            },
            {
              title: 'MONITORAMENTO ELETRÔNICO',
              description: 'Atendimento prioritário para mulheres sob risco de violência doméstica e familiar.',
              image: '/path/to/simbometade.png'
            }
          ].map((card, index) => (
            <div key={index} className="servico-macro-card">
              <div className="servico-macro-card-header">
                <img src={card.image} alt={card.title} />
                <span>{card.title}</span>
              </div>
              <p className="servico-macro-card-description">{card.description}</p>
              <button className="servico-macro-more-button" onClick={() => { /* Lógica para saber mais */ }}>
                <span>SAIBA MAIS</span>
                <img src="/path/to/ladinhoseta.png" alt="Seta" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicoMacro;
