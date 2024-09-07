// Popup.js
import React from 'react';
import '../style/popup.css'; // Estilos para o Popup

const Popup = ({ isOpen, onClose, text }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Atenção</h2>
          <button className="popup-close-button" onClick={onClose}>
            &times; {/* O símbolo &times; representa o "x" */}
          </button>
        </div>
        <div className="popup-text">
          <p>Percebemos que você pode estar em uma situação de <b>vulnerabilidade social</b>.</p>
          <p>Isso pode estar relacionado a fatores como dificuldades financeiras, falta de moradia segura ou acesso limitado a oportunidades de trabalho.</p>
          <p>Sabemos o quanto isso pode impactar a sua qualidade de vida, mas existem recursos disponíveis para te apoiar e te ajudar a superar essas dificuldades.</p>
          <button className="popup-button" onClick={onClose}>
            MAIS INFORMAÇÕES
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
