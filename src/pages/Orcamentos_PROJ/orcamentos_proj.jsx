import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BarraDeBusca from "../../components/barra-de-busca/barra-busca";
import { ContainerPerfil } from "../../components/card-perfil/style-perfil";
import Card_orcamentos from "../../components/Card_orcamentos/card_orcamentos";
import CriarOrcamento from "../Input_orcamentos/Input_orcamentos"; // Import do componente
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
      navigate("/criar-orcamento", { state: { projetoId } });
    };
  

  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBarProjetista />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
          {/* Lista de projetos */}
          <ContainerPerfil style={{ borderRadius: "10px", marginTop: "20px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {projetos.map((projeto) => (
                <Card_orcamentos
                  key={projeto.id}
                  titulo={projeto.usuario?.nome || "Usuário indefinido"}
                  descricao={projeto.descricao}
                  onCardClick={() => console.log("Card clicado!")} // Exemplo de clique no card
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
