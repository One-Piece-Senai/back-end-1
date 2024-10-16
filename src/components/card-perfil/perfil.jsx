import { ContainerPerfil } from "./style-perfil";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegar para outra rota
import Tabela from './Tabela';

export default function CardPerfil() {
  const [vetor, setVetor] = useState([
    { descricao: "Engrenagem de um motor", materiais: "Resina", tecnologia: "SLA", prazo: "04/05/2025" },
    { descricao: "Componente de carro", materiais: "Metal", tecnologia: "FDM", prazo: "12/08/2024" },
    { descricao: "Componente de carro", materiais: "Plastico", tecnologia: "FDM", prazo: "12/08/2024" },
    { descricao: "Componente de moto", materiais: "Metal", tecnologia: "SLA", prazo: "12/08/2024" },
    { descricao: "Componente de carro", materiais: "Metal", tecnologia: "FDM", prazo: "12/08/2024" },
    { descricao: "Componente de carro", materiais: "Metal", tecnologia: "FDM", prazo: "12/08/2024" },
    { descricao: "Parte de robô", materiais: "Plástico", tecnologia: "SLS", prazo: "18/02/2025" }
  ]);

  const navigate = useNavigate(); // Hook para navegar entre rotas

  const selecionar = (indice) => {
    console.log("Selecionado índice: ", indice);
    navigate(`/detalhes/${indice}`); // Navega para a rota de detalhes passando o índice
  };

  return (
    <ContainerPerfil>
      <input type="button" value="Cadastrar" className="botao_novo" />
      <div>
        <Tabela vetor={vetor} selecionar={selecionar} />
      </div>
    </ContainerPerfil>
  );
}
    