import React, { useState } from 'react';
import '../style/login.css';
import Popup from './PopupLocation'; // Importe o componente Popup
import { useNavigate } from 'react-router-dom';
import decoration from '../assets/logindecoration.svg';

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeSobrenome, setNomeSobrenome] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(true); // O popup será aberto por padrão

  const navigate = useNavigate();

  const handleContinue = () => {
    // Redireciona para a página desejada (ex: '/nextPage')
    localStorage.setItem('questionAnswered', 'false');
    navigate('/quiz');
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Fecha o popup
  };

  return (
    <div className="login-container">

      <Popup isOpen={isPopupOpen} onClose={closePopup} />

      <div className="login-image-container">
        <img src={decoration} alt="Login" className="login-image" />
      </div>

      <div className="login-content">
        <div className="login-title-container">
          <p className="login-title">Seja bem-vinda ao</p>
          <img src="/path/to/tituloimage.png" alt="Título" className="login-titulo-image" />
        </div>
        <p className="login-description">
          Feito para você pela Secretaria da Mulher do Governo do Estado de Pernambuco.
        </p>

        <div className="login-form">
          <div className="login-input-container">
            <p className="login-input-title">Cadastre-se</p>
            <p className="login-input-label">Seu CPF (apenas números)</p>
            <input
              type="text"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="login-input"
            />
          </div>

          <div className="login-input-container">
            <p className="login-input-label">Registre uma senha</p>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="login-input"
            />
          </div>

          <div className="login-input-container">
            <p className="login-input-title">Ou entre sem login, apenas com o seu nome!</p>
            <p className="login-input-label">Nome e sobrenome</p>
            <input
              type="text"
              placeholder="Digite seu nome e sobrenome"
              value={nomeSobrenome}
              onChange={(e) => setNomeSobrenome(e.target.value)}
              className="login-input"
            />
          </div>

          <button className="login-button-continue" onClick={handleContinue}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
