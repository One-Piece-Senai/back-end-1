import React from 'react';
import SideBar from '../../components/sidebar/sidebar';
import BarraDeBusca from '../../components/barra-de-busca/barra-busca';
import CardPerfil from '../../components/card-perfil/perfil';
import { ContainerPerfil } from "../../components/card-perfil/style-perfil";
import Cardprojetista from '../../components/Card_projetista/card_projetista';



function Pedidos() {

  return (
    <div className="App">
      <SideBar />
      <BarraDeBusca />
      <div className="Conteudo">
      <ContainerPerfil style={{ borderRadius: "10px" }}>
          <h1>Pedidos</h1>
        </ContainerPerfil>
      </div>
    </div>

  );
}

export default Pedidos;

