import BarraDeBusca from "../../../components/barra-de-busca/barra-busca";
import { MiniStyle } from "../../../components/mini-card/mini-style";
import CardProjetistasDisp from "../../../components/card-projetistas-disponiveis/projetistas-disponiveis";
import SideBarProjetista from "../../../components/sidebar_projetista/sidebar_projetista"
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ContainerPerfil } from "../../../components/card-perfil/style-perfil"
function Clientes() {
  const [projetos, setProjetos] = useState([]);

  const fetchProjetos = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/usuario/clientes`);
      setProjetos(response.data);
    } catch (error) {
      console.error("Error fetching projetos:", error);
    }
  };

  useEffect(() => {
    fetchProjetos();
  }, []);
  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBarProjetista />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
        <ContainerPerfil style={{ borderRadius: "10px", marginTop: "20px" }}>
        <div style={{ padding: "20px" }}>
          <h1>Clientes Disponíveis</h1>
          <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
            
                {projetos.map((obj) => (
                  <CardProjetistasDisp
                    key={obj.id}
                    nome={obj.nome}
                    descricao={obj.descricaoPerfil || "Sem descrição"}
                  />
                ))}
            
            
            </div>
            </div>
        </ContainerPerfil>

      </div>
      </div>
      </div>
    );
}

export default Clientes;
