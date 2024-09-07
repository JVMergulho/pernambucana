import React, { useEffect, useState } from 'react';

const MapComponent = () => {
  const [location, setLocation] = useState({ city: '', state: '' });

  useEffect(() => {
    // Função para obter a localização atual
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Chamada à API de geocodificação reversa do Google
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDiNcS5K4Fr7kcD_acuX17sgIwsNS3sqnA`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.results.length > 0) {
              const addressComponents = data.results[0].address_components;
              console.log('addressComponents:', addressComponents);

              // Extrair a cidade e o estado dos componentes de endereço
              const city = addressComponents.find((component) =>
                component.types.includes('administrative_area_level_2')
              )?.long_name || 'Cidade não encontrada';

              const state = addressComponents.find((component) =>
                component.types.includes('administrative_area_level_1')
              )?.long_name || 'Estado não encontrado';

              // Atualizar o estado com a cidade e o estado
              setLocation({ city, state });
            }
          })
          .catch((error) => console.error('Erro ao buscar a localização:', error));
      },
      (error) => console.error('Erro ao obter a localização:', error)
    );
  }, []);

  return (
    <div>
      <h1>Localização Atual</h1>
      <p>Cidade: {location.city}</p>
      <p>Estado: {location.state}</p>
    </div>
  );
};

export default MapComponent;
