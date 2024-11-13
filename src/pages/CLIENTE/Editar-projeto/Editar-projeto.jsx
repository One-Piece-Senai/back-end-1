import React from "react";
import SideBar from "../../../components/sidebar/sidebar";

import BarraDeBusca from "../../../components/barra-de-busca/barra-busca";
import { ContainerPerfil } from "../../../components/card-perfil/style-perfil";
import Puts from "../../../components/Editar_input/editar_input";

export default function EditarProjeto() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
          <ContainerPerfil style={{ borderRadius: "10px" }}>
            <Puts />
          </ContainerPerfil>
        </div>
      </div>
    </div>
  );
}
