import SideBar from "../../../components/sidebar/sidebar";
import BarraDeBusca from "../../../components/barra-de-busca/barra-busca";
import Orcamentos from "../../../components/Orcamentos/orcamentos";
import { useState, useEffect } from "react";
import axios from "axios";
import { ContainerPerfil } from "../../../components/card-perfil/style-perfil";

const userId = localStorage.getItem("userId");

function Orcamentocli() {
  const [projetos, setProjetos] = useState([]); // Lista de projetos com orçamentos

  // Função para buscar projetos com orçamentos
  const fetchOrcamentos = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/projetos/listar-com-orcamento/${userId}`
      );
      setProjetos(response.data);
    } catch (error) {
      console.error("Erro ao buscar orçamentos:", error);
    }
  };

  useEffect(() => {
    fetchOrcamentos();
  }, []);

  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
          <ContainerPerfil style={{ borderRadius: "10px" }}>
          <h1>Meus Orçamentos</h1>
          {projetos.length > 0 ? ( // Verifica se há projetos
            <Orcamentos projetos={projetos} />
          ) : (
            <p style={{ marginTop: "10px", color: "#666" }}>
              Sem orçamentos disponíveis.
            </p>
          )}
                  </ContainerPerfil>

          </div>
        </div>
      </div>
  );
}

export default Orcamentocli;
