import BarraDeBusca from "../../components/barra-de-busca/barra-busca";
import SideBarProjetista from "../../components/sidebar_projetista/sidebar_projetista";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContainerPerfil } from "../../components/card-perfil/style-perfil";

const API_BASE_URL_ORCAMENTO = "http://localhost:8080/orcamentos/listarProjetosAceitosPorUsuario/";

function MeusOrcamentos() {
  const userId = localStorage.getItem("userId");
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      fetchProjetos();
    } else {
      console.error("Usuário não identificado.");
      setLoading(false);
    }
  }, [userId]);

  // Fetch projetos
  const fetchProjetos = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL_ORCAMENTO}${userId}`);
      setProjetos(response.data);
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBarProjetista />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
          <ContainerPerfil style={{ borderRadius: "10px", marginTop: "20px" }}>
            <h2>Meus Projetos</h2>
            {loading ? (
              <p>Carregando projetos...</p>
            ) : projetos.length === 0 ? (
              <p>Nenhum projeto encontrado.</p>
            ) : (
              projetos.map((projeto) => (
                <div
                  key={projeto.id}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "15px",
                    margin: "10px 0",
                    background: "#f9f9f9",
                  }}
                >
                  <h3>Projeto: {projeto.titulo}</h3>
                  <p>
                    <strong>Descrição:</strong> {projeto.descricao}
                  </p>
                  <p>
                    <strong>Status do Projeto:</strong> {projeto.statusProjeto}
                  </p>
                </div> // Added closing div for each projeto
              ))
            )}
          </ContainerPerfil>
        </div>
      </div>
    </div>
  );
}

export default MeusOrcamentos;
