// Popup.js
import React from 'react';
import '../style/popup.css'; // Estilos para o Popup

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
            <h2>Atenção</h2>
        </div>
        <div className="popup-text">
            <p>Notamos que você pode estar vivenciando uma situação de violência doméstica. 
                        Esse tipo de violência é grave e pode ter consequências físicas, emocionais e 
                        psicológicas a longo prazo. Você não está sozinha!existem redes de apoio e caminhos 
                        seguros para buscar ajuda. Denunciar pode ser o primeiro passo para recuperar 
                        sua segurança e seu bem-estar.</p>
            <button className="popup-button" onClick={onClose}>
                MAIS INFORMAÇÕES
            </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
