import React, { useState } from 'react';
import './Nav.css';
import CadastroModal from '../MiniTela/Minitela.jsx'; // Corrija o caminho se necessário
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade do modal


  const handleLoginClick = () => {
    navigate('/Login'); // Redireciona para a página de login
  };

  const handleCadastroClick = () => {
    setIsModalOpen(true); // Abre o modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };


  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#home" className="navbar-link">Home</a>
        <a href="#about" className="navbar-link">Sobre</a>
        <a href="#services" className="navbar-link">Servicos</a>
      </div>
      <div className="navbar-right">
        <button className="navbar-button" onClick={handleLoginClick}>Login</button>
        <button className="navbar-button" onClick={handleLoginClick1}>Casdastrar</button>
      </div>
      {isModalOpen && <CadastroModal onClose={closeModal} />}
    </nav>
  );
}

export default Nav;
