import { ContainerPerfil } from "./style-perfil";
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SideBar from '../../components/sidebar/sidebar';
import BarraDeBusca from '../../components/barra-de-busca/barra-busca';


export default function Detalhes() {
  const { indice } = useParams(); // Obtém o índice da URL
  const vetor = [
    { descricao: "Engrenagem de um motor", materiais: "Resina", tecnologia: "SLA", prazo: "04/05/2025" },
    { descricao: "Componente de carro", materiais: "Metal", tecnologia: "FDM", prazo: "12/08/2024" },
    { descricao: "Parte de robô", materiais: "Plástico", tecnologia: "SLS", prazo: "18/02/2025" },
    { descricao: "Componente de moto", materiais: "Metal", tecnologia: "SLA", prazo: "12/08/2024" },
    { descricao: "Componente de carro", materiais: "Metal", tecnologia: "FDM", prazo: "12/08/2024" },
    { descricao: "Componente de carro", materiais: "Metal", tecnologia: "SLA", prazo: "12/08/2024" },
    { descricao: "Parte de robô", materiais: "Plástico", tecnologia: "SLS", prazo: "18/02/2025" }
  ];

  const item = vetor[indice]; // Encontra o item correspondente no vetor

  if (!item) {
    return <div>Item não encontrado</div>;
  }

  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <div className="App" style={{ display: 'flex' }}>
    <SideBar />
    <div style={{ flex: 1 }}>
      <BarraDeBusca />
      <div className="box-branco">
        <ContainerPerfil>
          <h2>Detalhes do Item</h2><br />
          <p>Descrição: {item.descricao}</p>
          <p>Materiais: {item.materiais}</p>
          <p>Tecnologia: {item.tecnologia}</p>
          <p>Prazo: {item.prazo}</p>
          <div className="buttons">
            <input type="button" value="Aceitar" className="botao_aceitar" />
            <input type="button"
              value="Voltar"
              onClick={handleVoltar}
              className="botao_voltar"
            />
          </div>
        </ContainerPerfil>
      </div>
    </div>
    </div>
  );
}
