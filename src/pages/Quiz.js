import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"]; // Lista de itens
  const navigate = useNavigate();
  const [clickedItems, setClickedItems] = useState([]); // Para rastrear os botões clicados

  const handleContinue = () => {
    // Redireciona para a página desejada (ex: '/nextPage')
    navigate('/Home');
  };

  const handleAlternative = (item) => {
    if (clickedItems.includes(item)) {
      setClickedItems(clickedItems.filter((i) => i !== item)); // Remove o item se já foi clicado
    } else {
      setClickedItems([...clickedItems, item]); // Adiciona o item se ainda não foi clicado
    }
  };

  // Agrupa os itens em pares
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 2) {
    groupedItems.push(items.slice(i, i + 2));
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <p>Bem vinda ao</p>
        <p>Pernambucana</p>
        <p>Nos ajude a te ajudar!</p>
        <p>Selecione seus principais interesses ou necessidades.</p>
      </div>

      <div>
        {groupedItems.map((group, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            {group.map((item) => (
              <button
                key={item}
                onClick={() => handleAlternative(item)} // Redireciona ao clicar no botão
                style={{
                  width: '116px',
                  height: '94px',
                  backgroundColor: clickedItems.includes(item) ? 'green' : 'blue', // Muda a cor baseado no estado
                  color: 'white',
                  borderRadius: '8px',
                  margin: '20px',
                }}
              >
                {item}
              </button>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={handleContinue}
        style={{
          width: '88px',
          height: '36px',
          backgroundColor: 'blue',
          color: 'white',
          borderRadius: '50px',
          marginTop: '20px',
        }}
      >
        Continuar
      </button>
    </div>
  );
};

export default Quiz;
