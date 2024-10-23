import React from 'react'
import SideBar from '../../components/sidebar/sidebar';

import BarraDeBusca from '../../components/barra-de-busca/barra-busca';
import { ContainerPerfil } from "../../components/card-perfil/style-perfil";
import Input from "../../components/Inputs/Input";

export default function Projeto() {
  return (
    <div className="App">
      <SideBar CorFundo={false} />
      <BarraDeBusca />
      <div className="Conteudo">
        <ContainerPerfil style={{ borderRadius: "10px" }}>
          <Input />
        </ContainerPerfil>
      </div>
    </div>
  );
}
