import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar o hook para navegação
import '../style/services.css'; // Importar o CSS
import woman from '../assets/iconwoman.svg'; // Importar a imagem
import edu from '../assets/iconedu.svg'; // Importar a imagem
import ear from '../assets/iconear.svg'; // Importar a imagem
import art from '../assets/iconart.svg'; // Importar a imagem
import gender from '../assets/icongender.svg'; // Importar a imagem
import doc from '../assets/icondoc.svg'; // Importar a imagem
import health from '../assets/iconhealth.svg'; // Importar a imagem
import prof from '../assets/iconprof.svg'; // Importar a imagem
import people from '../assets/iconpeople.svg'; // Importar a imagem
import shield from '../assets/iconshield.svg'; // Importar a imagem
import logo from '../assets/logo.svg'; // Importar a imagem
import search from '../assets/searchicon.svg'; // Importar a imagem

const servicesData = [
  { label: "Proteção à Mulher", image: woman, path: "/app/serviceMacro" },
  { label: "Campanhas Educativas", image: edu, path: "/app/serviceMacro" },
  { label: "Qualificação Profissional", image: prof, path: "/app/serviceMacro" },
  { label: "Saúde", image: health, path: "/saude" },
  { label: "Formação de Gênero", image: gender, path: "/app/serviceMacro" },
  { label: "Apoio à Artesã", image: art, path: "/app/serviceMacro" },
  { label: "Documentos e Cidadania", image: doc, path: "/app/serviceMacro" },
  { label: "Comissões e Comitês", image: people, path: "/app/serviceMacro" },
  { label: "Ouvidoria das Mulheres", image: ear, path: "/app/serviceMacro" },
  { label: "Delegacias Especializadas", image: shield, path: "/app/serviceMacro" },
];

const chunkArray = (array, size) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

const ServiceCard = ({ label, image, path }) => {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <div className="service-card">
      <button className="service-button" onClick={() => navigate(path)}>
        <div className="rectangle">
          <img src={image} alt={label} />
        </div>
      </button>
      <p className="service-label">{label}</p>
    </div>
  );
};

const Services = () => {
  const rows = chunkArray(servicesData, 3);

  return (
    <div className="services-container">
      <div className="services-header">
        <div className="header-row">
          <img src={logo} alt="Logo" />
          <div className="flex-grow" />
          <img style={{ width: '28px', height: '28px' }}  src={search} alt="Busca" />
        </div>

        <div className="header-row">
          <p className="services-title">Todos os serviços disponíveis</p>
        </div>
      </div>

      <div className="services-content">
        {rows.map((row, rowIndex) => (
          <div className="services-row" key={rowIndex}>
            {row.map(service => (
              <ServiceCard key={service.label} label={service.label} image={service.image} path={service.path} />
            ))}
          </div>
        ))}
      </div>

      <div className="flex-grow" />
    </div>
  );
};

export default Services;
