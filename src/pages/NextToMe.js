import { useEffect, useState } from 'react';
import '../style/nextToMe.css';
import logo from '../assets/logo.svg';
import logoreverse from '../assets/logopurplereverse.svg';

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

  const handleCopyNumber = () => {
    // Lógica para copiar o número
    // Exemplo de implementação:
    navigator.clipboard.writeText('Número para copiar').then(
      () => alert('Número copiado com sucesso!'),
      () => alert('Falha ao copiar o número.')
    );
  };

  return (
    <div className="sos-container">
      <div className="next-header">
        <img src={logo} alt="Logo" />
        <h1>Perto de mim</h1>
      </div>

      <div className="location-info">
        <p>
        Confira os pontos de socorro e atendimento à mulher mais próximos de você na sua região:
        </p>
      </div>

      <div className="map-container">
        {coords.latitude && coords.longitude ? (
          <iframe
            className="map"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=${coords.latitude},${coords.longitude}`}
            title="Mapa da minha localização"
          ></iframe>
        ) : (
          <p>Carregando mapa...</p>
        )}
      </div>

      <div className="cards-container">
        <div className="section-header">
          Delegacias Especializadas em Atendimento à Mulher (DEAM) em RECIFE
        </div>

        <div className="card">
          <div className="card-title">
            <img src={logoreverse} alt="DEAM" />
            <p> 
              1ª DEAM do Recife
            </p>
          </div>
          <div className="card-description">
            <p><b>Endereço:</b> Praça do Campo Santo, s/n, Santo Amaro</p>
            <p><b>Número de Telefone:</b> (81) 3184-3352</p>
          </div>
          <div className="card-footer">
            <button className="copy-button" onClick={handleCopyNumber}>
              Ligar
            </button>
          </div>
        </div>

        <div className="section-header">Coordenadoria Geral</div>

        <div className="card">
          <div className="card-title">
            <img src={logoreverse} alt="Coordenadora" />
            <p>Coordenadora: Ana Patrícia</p>
          </div>
          <div className="card-description">
            <p><b>Telefone:</b> (81) 98494-0521</p>
            <p><b>E-mail:</b> ana.patricia@secmulher.pe.gov.br</p>
            <br />
          </div>
          <div className="card-footer">
            <button className="copy-button" onClick={handleCopyNumber}>
              Ligar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextToMe;
