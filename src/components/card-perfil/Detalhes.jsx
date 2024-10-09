import { ContainerPerfil } from "./style-perfil";
import React from 'react';
import { useParams } from 'react-router-dom';
import SideBar from '../../components/sidebar/sidebar';
import BarraDeBusca from '../../components/barra-de-busca/barra-busca';
import CardPerfil from '../../components/card-perfil/perfil';


export default function Detalhes() {
  const { indice } = useParams(); // Obtém o índice da URL
  const vetor = [
    { descricao: "Engrenagem de um motor", materiais: "Resina", tecnologia: "SLA", prazo: "04/05/2025" },
    { descricao: "Componente de carro", materiais: "Metal", tecnologia: "FDM", prazo: "12/08/2024" },
    { descricao: "Parte de robô", materiais: "Plástico", tecnologia: "SLS", prazo: "18/02/2025" }
  ];

  const item = vetor[indice]; // Encontra o item correspondente no vetor

  if (!item) {
    return <div>Item não encontrado</div>;
  }

  return (
    <div className="App">
      <SideBar />
      <div>
      <BarraDeBusca />
      <ContainerPerfil>  
      <h3>Detalhes do Item</h3><br />
      <p>Descrição: {item.descricao}</p>
      <p>Materiais: {item.materiais}</p>
      <p>Tecnologia: {item.tecnologia}</p>
      <p>Prazo: {item.prazo}</p>
      <input type="button" value="Aceitar" className="botao _novo" />

      </ContainerPerfil>
    </div>
    </div>
  );
}
