import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BarraDeBusca from "../../components/barra-de-busca/barra-busca";
import { ContainerPerfil } from "../../components/card-perfil/style-perfil";
import SideBar from "../../components/sidebar/sidebar";
import Card_orcamentos from "../../components/Card_orcamentos/card_orcamentos";
import CriarOrcamento from "../Input_orcamentos/Input_orcamentos"; // Import do componente

const API_BASE_URL = "http://localhost:8080/projetos/listar-aberto";
const userId = localStorage.getItem("userId");

function Pedidos() {
  const [projetos, setProjetos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjetos();
  }, []);

  const fetchProjetos = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}`);
      setProjetos(response.data);
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    }
  };

  const handleSaibaMais = (id) => {
    navigate(`/projeto/${id}`);
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
          {/* Formulário para criar orçamento */}
          <CriarOrcamento />

          {/* Lista de projetos */}
          <ContainerPerfil style={{ borderRadius: "10px", marginTop: "20px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {projetos.map((projeto) => (
                <Card_orcamentos
                  key={projeto.id}
                  titulo={projeto.usuario?.nome || "Usuário indefinido"}
                  descricao={projeto.descricao}
                  onSaibaMais={() => handleSaibaMais(projeto.id)}
                />
              ))}
            </div>
          </ContainerPerfil>
        </div>
      </div>
    </div>
  );
}

export default Pedidos;
