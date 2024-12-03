import SideBarProjetista from "../../components/sidebar_projetista/sidebar_projetista";
import BarraDeBusca from "../../components/barra-de-busca/barra-busca";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContainerPerfil } from "../../components/card-perfil/style-perfil";

const API_BASE_URL_ORCAMENTO = "http://localhost:8080/orcamentos/listarPorUsuario/";

function MeusOrcamentos() {
  const userId = localStorage.getItem("userId");
  const [orcamentos, setOrcamentos] = useState([]);

  useEffect(() => {
    fetchOrcamentos();
  }, [userId]);

  // Fetch orçamentos
  const fetchOrcamentos = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL_ORCAMENTO}${userId}`);
      setOrcamentos(response.data);
    } catch (error) {
      console.error("Erro ao buscar orçamentos:", error);
    }
  };

  return (
    <div className="App" style={{ display: "flex" }}>
    <SideBarProjetista />
    <div style={{ flex: 1 }}>
      <BarraDeBusca />
      <div className="box-branco">
        {/* Lista de projetos */}
        <ContainerPerfil style={{ borderRadius: "10px", marginTop: "20px" }}>
        <div style={{ padding: "20px" }}>
      <h1>Meus Orçamentos</h1>

      

    
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {orcamentos.map((orcamento) => (
          <div
            key={orcamento.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "300px",
              backgroundColor:
                orcamento.status === "EM_ANALISE"
                  ? "#fff3cd"
                  : orcamento.status === "RECUSADO"
                  ? "#f8d7da"
                  : "#d4edda", // Amarelo para "EM_ANALISE", vermelho para "RECUSADO" e verde para "ACEITO"
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>Orçamento #{orcamento.id}</h3>
            <p>
              <strong>Valor:</strong> R$ {orcamento.valor}
            </p>
            <p>
              <strong>Data de Entrega:</strong> {orcamento.dataEntrega}
            </p>
            <p>
              <strong>Forma de Pagamento:</strong> {orcamento.formaPagamento}
            </p>
            <p>
              <strong>Status:</strong> {orcamento.status}
            </p>
            <p>
              <strong>Criado por:</strong> {orcamento.usuario.nome}
            </p>
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
