import BarraDeBusca from "../../components/barra-de-busca/barra-busca";
import SideBarProjetista from "../../components/sidebar_projetista/sidebar_projetista";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContainerPerfil } from "../../components/card-perfil/style-perfil";

const API_BASE_URL_ORCAMENTO = "http://localhost:8080/orcamentos/listarProjetosAceitosPorUsuario/";
const API_UPDATE_ORCAMENTO = "http://localhost:8080/orcamentos/atualizar";

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

  // Atualiza o status do orçamento
  const atualizarStatusOrcamento = async (idOrcamento, novoStatus) => {
    try {
      await axios.put(`${API_UPDATE_ORCAMENTO}/${idOrcamento}`, {
        status: novoStatus,
      });
      alert(`Status do orçamento atualizado para ${novoStatus}`);
      fetchProjetos(); // Recarrega os projetos para refletir a mudança
    } catch (error) {
      console.error("Erro ao atualizar o status do orçamento:", error);
      alert("Erro ao atualizar o status do orçamento.");
    }
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBarProjetista />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
          <ContainerPerfil style={{ borderRadius: "10px", marginTop: "20px" }}>
            <div style={{ padding: "20px" }}>
              <h1>Meus Projetos</h1>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  marginTop: "20px",
                }}
              >
                {projetos.map((projeto) => (
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
                      <strong>Status do Projeto:</strong> {projeto.statusOrcamento}
                    </p>
                    <p>
                      <strong>Data de entrega:</strong> {projeto.dataEntrega}
                    </p>
                    <p>
                      <strong>Valor:</strong> {projeto.valor}
                    </p>
                    {projeto.orcamentos &&
                      projeto.orcamentos.map((orcamento) => (
                        <div
                          key={orcamento.id}
                          style={{
                            background: "#f1f1f1",
                            border: "1px solid #ddd",
                            borderRadius: "5px",
                            padding: "10px",
                            marginTop: "10px",
                          }}
                        >
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </ContainerPerfil>
        </div>
      </div>
    </div>
  );
}

export default MeusOrcamentos;
