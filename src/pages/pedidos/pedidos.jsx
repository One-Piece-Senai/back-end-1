import SideBar from "../../components/sidebar/sidebar";
import BarraDeBusca from "../../components/barra-de-busca/barra-busca";
import CardPerfil from "../../components/card-perfil/perfil";
import { ContainerPerfil } from "../../components/card-perfil/style-perfil";
import Cardprojetista from "../../components/Card_projetista/card_projetista";
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/projetos/cliente/";

function Pedidos() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
          <ContainerPerfil style={{ borderRadius: "10px" }}>
            <h3>Lista de Projetos</h3>
            <Cardprojetista />
          </ContainerPerfil>
        </div>
      </div>
    </div>
  );
}

export default Pedidos;
