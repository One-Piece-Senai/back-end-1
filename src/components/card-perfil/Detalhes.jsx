import { useParams, useNavigate, useLocation } from "react-router-dom";
import SideBar from "../../components/sidebar/sidebar";
import BarraDeBusca from "../../components/barra-de-busca/barra-busca";
import axios from "axios";
import { useState, useEffect } from "react";
import { ContainerPerfil } from "./style-perfil";

export default function Detalhes() {
  const location = useLocation();
  const id = location.state?.id; // ID do projeto vindo da navegação
  console.log('ID recebido direto dos parâmetros da URL:', id);
  const [item, setItem] = useState({}); // Armazena os detalhes do projeto
  const navigate = useNavigate();

  // Função para buscar detalhes do projeto
  const fetchProjetoDetalhes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/projetos/buscar/${id}`
      );
      setItem(response.data);
    } catch (error) {
      console.error("Erro ao buscar detalhes do projeto:", error);
    }
  };

  useEffect(() => {
    fetchProjetoDetalhes();
  }, [id]); // Recarregar ao mudar o ID

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
            <h1>Detalhes do Projeto</h1>
            <br />
            <p><strong>Título:</strong> {item.titulo}</p>
            <p><strong>Largura:</strong> {item.largura}</p>
            <p><strong>Altura:</strong> {item.altura}</p>
            <p><strong>Descrição:</strong> {item.descricao}</p>
            <p><strong>Material:</strong> {item.material}</p>
            <p><strong>Prazo:</strong> {item.dataFinalizacao}</p>
            <p><strong>Caminho do arquivo:</strong> {item.caminhoArquivo}</p>
            <div className="buttons">
              <button onClick={handleVoltar} className="botao_voltar">
                Voltar
              </button>
            </div>
          </ContainerPerfil>
        </div>
      </div>
    </div>
  );
}
