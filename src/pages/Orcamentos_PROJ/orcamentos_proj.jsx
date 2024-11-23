import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BarraDeBusca from "../../components/barra-de-busca/barra-busca";
import { ContainerPerfil } from "../../components/card-perfil/style-perfil";
import Card from "../../components/Card_orcamentos/card_orcamentos" // Certifique-se de que o caminho está correto
import SideBarProjetista from "../../components/sidebar_projetista/sidebar_projetista";

const API_BASE_URL = "http://localhost:8080/projetos/listar-aberto";

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

  const handleSaibaMais = (projetoId) => {
    // Navegar para a página de criação de orçamento com o projetoId
    navigate("/criar-orcamentos", { state: { projetoId } });
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBarProjetista />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
          <ContainerPerfil style={{ borderRadius: "10px", marginTop: "20px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {projetos.map((projeto) => (
                <Card
                  key={projeto.id}
                  titulo={projeto.usuario?.nome || "Usuário indefinido"}
                  descricao={projeto.descricao}
                  id={projeto.id}
                  onCardClick={() => console.log("Card clicado!")} // Clique no card completo
                  onSaibaMais={() => handleSaibaMais(projeto.id)} // Clique no botão "Saiba Mais"
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
