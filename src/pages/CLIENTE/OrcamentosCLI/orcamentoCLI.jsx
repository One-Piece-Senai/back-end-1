import SideBar from "../../../components/sidebar/sidebar";
import BarraDeBusca from "../../../components/barra-de-busca/barra-busca";
import Orcamentos from "../../../components/Orcamentos/orcamentos";
import { useState, useEffect } from "react";
import axios from "axios";

const userId = localStorage.getItem("userId");

function Orcamentocli() {
  const [projetos, setProjetos] = useState([]); // Lista de projetos com orçamentos
  const [message, setMessage] = useState(""); // Mensagem de feedback

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
          <h1>Meus Orçamentos</h1>
          {message && <p>{message}</p>}
          <Orcamentos
            projetos={projetos}/>
        
        </div>
      </div>
    </div>
  );
}

export default Orcamentocli;
