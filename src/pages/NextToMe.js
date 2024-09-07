import { useEffect, useState } from 'react';
import '../style/nextToMe.css';

const NextToMe = () => {
  const [coords, setCoords] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    // Função para obter a localização atual
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude }); // Armazena as coordenadas no estado
      },
      (error) => console.error('Erro ao obter localização:', error)
    );
  }, []);

  return (
    <div className="map-conteiner">
      {coords.latitude && coords.longitude ? (
        <iframe
          className="map"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDiNcS5K4Fr7kcD_acuX17sgIwsNS3sqnA
          &q=${coords.latitude},${coords.longitude}`}
          title="Mapa da minha localização"
        ></iframe>
      ) : (
        <p>Carregando mapa...</p>
      )}
    </div>
  );
};

export default NextToMe;
