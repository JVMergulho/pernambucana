import React, { useState, useEffect } from 'react';
import Popup from './Popup'; // Importe o componente Popup
import Message from './Message'; // Importe o componente Message
import '../style/question.css';

const Question = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false); // Controle da exibição do Message

  // Verifica o localStorage ao montar o componente
  useEffect(() => {
    const answered = localStorage.getItem('questionAnswered');
    if (answered === 'true') {
      setShowMessage(true); // Se já foi respondida, mostra o Message
    }
  }, []);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleButtonClick = (label) => {
    if (label === 'Muito' || label === 'Preparada') {
      setShowMessage(true);
      localStorage.setItem('questionAnswered', 'true'); // Armazena que a pergunta foi respondida
    } else {
      openPopup(); // Mostra o Popup para as outras opções
    }
  };

  if (showMessage) {
    return <Message />; // Renderiza o componente Message
  }

  return (
    <div className="question-container">
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <p>Notamos que você pode estar vivenciando uma situação de violência doméstica. 
          Esse tipo de violência é grave e pode ter consequências físicas, emocionais e 
          psicológicas a longo prazo. Você não está sozinha! Existem redes de apoio e caminhos 
          seguros para buscar ajuda. Denunciar pode ser o primeiro passo para recuperar 
          sua segurança e seu bem-estar.</p>
        <button onClick={closePopup}>Fechar</button>
      </Popup>

      <div className="question-rectangle">
        <div className="question-content">
          <p className="question">
            Quão preparada você se sente para atuar no mercado de trabalho com as qualificações que possui?
          </p>

          <div className="button-group">
            {[
              { emoji: '😁', label: 'Muito', delay: 0 },
              { emoji: '😊', label: 'Preparada', delay: 3000 },
              { emoji: '😐', label: 'Neutro', delay: 3000 },
              { emoji: '😔', label: 'Pouco', delay: 3000 },
              { emoji: '😢', label: 'Nada', delay: 3000 },
            ].map((item, index) => (
              <div key={index} className="button-container">
                <button
                  className="emoji-button"
                  onClick={() => handleButtonClick(item.label)}
                >
                  {item.emoji}
                </button>
                <p className="label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
