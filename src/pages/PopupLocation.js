import React, { useEffect, useState } from 'react';
import '../style/popupLocation.css'; // Estilos para o Popup
import pernambuco from '../assets/pernambucoZM.svg'; // Importa a imagem de Pernambuco

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
    <div className="popuploc-overlay">
      <div className="popuploc-content">
        <div>
          <h3> Identificamos que você está em <b>{location.city}</b>, <b>{location.state}</b>.
          </h3>
        </div>
        <div className="popuploc-text">
          {loading && <p>Carregando localização...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && (
            <div className="popuploc-location">
              <img src={pernambuco} alt="Pernambuco" />
              <p>
                Gostaria de ver informações personalizadas para a sua localização?
              </p>
            </div>
          )}
          <div className="popuploc-buttons">
            <button className="popuploc-button-weak" onClick={onClose}>
              Talvez depois
            </button>
            <button className="popuploc-button" onClick={onClose}>
              Sim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupLocation;
