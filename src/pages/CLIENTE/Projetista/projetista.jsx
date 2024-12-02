import SideBar from "../../../components/sidebar/sidebar";
import BarraDeBusca from "../../../components/barra-de-busca/barra-busca";
import CardProjetistasDisp from "../../../components/card-projetistas-disponiveis/projetistas-disponiveis";
import { ContainerPerfil } from "../../../components/card-perfil/style-perfil";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Clientes() {
  const [projetos, setProjetos] = useState([]);

  const fetchProjetos = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/usuario/projetistas`);
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
      <SideBar />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
          <ContainerPerfil style={{ borderRadius: "10px" }}>
          <h1>Projetistas Disponíveis</h1>
            {projetos.length === 0 ? (
              <p>Nenhum projetista encontrado.</p>
            ) : (
              <section
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", // Ajusta largura mínima dos cards
                  gap: "20px",
                  padding: "1px 0",
                }}
              >
                {projetos.map((obj) => (
                  <CardProjetistasDisp
                    key={obj.id}
                    nome={obj.nome}
                    descricao={obj.descricaoPerfil || "Sem descrição"}
                  />
                ))}
              </section>
            )}
        </ContainerPerfil>

      </div>
      </div>
      </div>
    );
}

export default Clientes;
