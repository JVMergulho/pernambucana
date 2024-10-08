import React, { useState } from 'react';
import { FaCheckSquare, FaSquare } from 'react-icons/fa'; // Import icons
import '../style/quiz.css';
import logo from "../assets/logo.svg"
import MapComponent from './Map';
import { useNavigate } from 'react-router-dom';
import help from '../assets/helpalternative.svg'

// Modelo de Interesse
const Interesse = ({ interesse, toggleSelecionado }) => {
  return (
    <div
      className={`interesse ${interesse.selecionado ? 'selecionado' : ''}`}
      onClick={() => toggleSelecionado(interesse.id)}
    >
      <span className="titulo">{interesse.titulo}</span>
      {interesse.selecionado ? (
        <FaCheckSquare className="icone" />
      ) : (
        <FaSquare className="icone" />
      )}
    </div>
  );
};

// Componente principal
const Quiz = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Redireciona para a página desejada (ex: '/nextPage')
    localStorage.setItem('questionAnswered', 'false');
    navigate('/app/home');
  };

  const [interesses, setInteresses] = useState([
    { id: 1, titulo: 'Proteção à mulher', selecionado: false },
    { id: 2, titulo: 'Qualificação Profissional', selecionado: false },
    { id: 3, titulo: 'Campanhas Educativas', selecionado: false },
    { id: 4, titulo: 'Apoio à artesã', selecionado: false },
    { id: 5, titulo: 'Formação de gênero', selecionado: false },
    { id: 6, titulo: 'Documentação e Cidadania', selecionado: false },
    { id: 7, titulo: 'Assessoria aos segmentos', selecionado: false }
  ]);

  const toggleSelecionado = (id) => {
    setInteresses(
      interesses.map((interesse) =>
        interesse.id === id
          ? { ...interesse, selecionado: !interesse.selecionado }
          : interesse
      )
    );
  };

  return (
    <div className="tela-interesses">

      {/* <MapComponent /> */}
      <div className="logo-container">
        <img src= {logo} />
      </div>

      <h1 className="titulo-principal">PERNAMBUCANA</h1>

      <div className="descricao">
        <p>Nos ajude a te ajudar! Selecione seus</p>
        <p>principais interesses ou necessidades.</p>
      </div>

      <div className="interesses-lista">
        {interesses.map((interesse) => (
          <Interesse
            key={interesse.id}
            interesse={interesse}
            toggleSelecionado={toggleSelecionado}
          />
        ))}
      </div>

      <button className="botao help">
        <span>Pedir socorro</span>
        <img src= {help} alt="Ícone de Socorro" />
      </button>

      <button className="continue"
        onClick={handleContinue}
      >
        Continuar
      </button>
    </div>
  );
};

export default Quiz;
