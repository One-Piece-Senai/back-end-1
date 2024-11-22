import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Para navegação
import BarraDeBusca from "../../components/barra-de-busca/barra-busca";
import { ContainerPerfil } from "../../components/card-perfil/style-perfil";
import SideBar from "../../components/sidebar/sidebar";
import Card_orcamentos from "../../components/Card_orcamentos/card_orcamentos";

const API_BASE_URL = "http://localhost:8080/projetos/listar-aberto";
const API_BASE_ORCAMENTO = "http://localhost:8080/orcamentos";

const userId = localStorage.getItem("userId");

function Pedidos() {
  const [projetos, setProjetos] = useState([]);
  const [message, setMessage] = useState("");
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

  const handleCriarOrcamentoForm = async (formData) => {
    try {
      const response = await axios.post(`${API_BASE_ORCAMENTO}/criar`, formData);
      setMessage(`Orçamento criado com sucesso! ID: ${response.data.id}`);
    } catch (error) {
      setMessage("Erro ao criar orçamento.");
      console.error("Erro ao criar orçamento:", error);
    }
  };

  const handleSaibaMais = (id) => {
    navigate(`/projeto/${id}`); // Redireciona para a página de detalhes do projeto
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
          <ContainerPerfil style={{ borderRadius: "10px" }}>
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
