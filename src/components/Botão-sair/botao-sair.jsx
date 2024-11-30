import React from "react";
import { useNavigate } from "react-router-dom";

function BotaoSair() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove os dados do usuário do localStorage ou sessionStorage
    localStorage.removeItem("userId"); // Substitua por outros dados, se necessário
    localStorage.removeItem("token"); // Remova o token de autenticação, se houver
    sessionStorage.clear(); // Limpa dados de sessão, se usado

    // Redireciona para a página de login
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
    >
      Sair
    </button>
  );
}

export default BotaoSair;
