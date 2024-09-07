import React, { useEffect, useState } from 'react';
import '../style/popup.css'; // Estilos para o Popup

const PopupLocation = ({ isOpen, onClose }) => {
  const [location, setLocation] = useState({ city: '', state: '' });
  const [loading, setLoading] = useState(true); // Adiciona estado para carregamento
  const [error, setError] = useState(null); // Adiciona estado para erros

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    // Função para obter a localização atual
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Chamada à API de geocodificação reversa do Google
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.results.length > 0) {
              const addressComponents = data.results[0].address_components;

              // Extrair a cidade e o estado dos componentes de endereço
              const city = addressComponents.find((component) =>
                component.types.includes('administrative_area_level_2')
              )?.long_name || 'Cidade não encontrada';

              const state = addressComponents.find((component) =>
                component.types.includes('administrative_area_level_1')
              )?.long_name || 'Estado não encontrado';

              // Atualizar o estado com a cidade e o estado
              setLocation({ city, state });
              setLoading(false);
            } else {
              throw new Error('Nenhum resultado encontrado na resposta da API.');
            }
          })
          .catch((error) => {
            console.error('Erro ao buscar a localização:', error);
            setError('Não foi possível obter a localização.');
            setLoading(false);
          });
      },
      (error) => {
        console.error('Erro ao obter a localização:', error);
        setError('Não foi possível obter a localização.');
        setLoading(false);
      }
    );
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div>
          <h2>Atenção</h2>
        </div>
        <div className="popup-text">
          {loading && <p>Carregando localização...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && (
            <p>
              Identificamos que você está em <b>{location.city}</b>, deseja receber informações de eventos voltados para mulheres nessa cidade?
            </p>
          )}
          <button className="popup-button" onClick={onClose}>
            MAIS INFORMAÇÕES
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupLocation;
