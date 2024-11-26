import { useParams, useNavigate } from "react-router-dom";
import SideBar from "../../components/sidebar/sidebar";
import BarraDeBusca from "../../components/barra-de-busca/barra-busca";
import axios from "axios";
import { useState, useEffect } from "react";
import { ContainerPerfil } from "./style-perfil";
import Orcamentos from "../../components/Orcamentos/orcamentos"; // Certifique-se de que o caminho está correto

const userId = localStorage.getItem("userId");

export default function Detalhes() {
  const { indice } = useParams(); // Obtém o índice da URL
  const [item, setItem] = useState([]);
  const [projetos, setProjetos] = useState([]);

  const navigate = useNavigate();

  // Função para buscar detalhes do projeto
  const fetchProjetos = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/projetos/buscar/${indice}`
      );
      setItem(response.data);
    } catch (error) {
      console.error("Erro ao buscar projeto:", error);
    }
  };

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
    fetchProjetos();
    fetchOrcamentos();
  }, []);

  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
          <ContainerPerfil>
            <h1>Detalhes do Item</h1>
            <br />
            <p>Largura: {item.largura}</p>
            <p>Altura: {item.altura}</p>
            <p>Descrição: {item.descricao}</p>
            <p>Material: {item.material}</p>
            <p>Tecnologia: {item.tecnologia}</p>
            <p>Prazo: {item.dataFinalizacao}</p>
            <p>Caminho do arquivo: {item.caminhoArquivo}</p>
            <div className="buttons">
              <input type="button" value="Aceitar" className="botao_aceitar" />
              <input
                type="button"
                value="Voltar"
                onClick={handleVoltar}
                className="botao_voltar"
              />
            </div>
          </ContainerPerfil>
          <Orcamentos projetos={projetos} />
        </div>
      </div>
    </div>
  );
}
