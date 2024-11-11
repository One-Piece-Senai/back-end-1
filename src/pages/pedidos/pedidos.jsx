import SideBar from "../../components/sidebar/sidebar";
import BarraDeBusca from "../../components/barra-de-busca/barra-busca";
import CardPerfil from "../../components/card-perfil/perfil";
import { ContainerPerfil } from "../../components/card-perfil/style-perfil";
import Cardprojetista from "../../components/Card_projetista/card_projetista";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardProjetistasDisp from "../../components/card-projetistas-disponiveis/projetistas-disponiveis";

const API_BASE_URL = "http://localhost:8080/projetos/cliente/";

function Pedidos() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    fetchProjetos();
  }, []);

  const userId = localStorage.getItem("userId");

  const fetchProjetos = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}${userId}`);
      setProjetos(response.data);
    } catch (error) {
      console.error("Error fetching projetos:", error);
    }
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
          <ContainerPerfil style={{ borderRadius: "10px" }}>
            <h3>Lista de Projetos</h3>
            <ul>
              {projetos.map((projeto) => (
                <Cardprojetista titulo={projeto.descricao} />
              ))}
            </ul>
          </ContainerPerfil>
        </div>
      </div>
    </div>
  );
}

export default Pedidos;
