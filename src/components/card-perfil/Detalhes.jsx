import { ContainerPerfil } from "./style-perfil";
import { useParams, useNavigate } from "react-router-dom";
import SideBar from "../../components/sidebar/sidebar";
import BarraDeBusca from "../../components/barra-de-busca/barra-busca";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Detalhes() {
  const { indice } = useParams(); // Obtém o índice da URL
  const [item, setItem] = useState([]);

  const fetchProjetos = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/projetos/buscar/${indice}`,
      );
      setItem(response.data);
    } catch (error) {
      console.error("Error fetching projetos:", error);
    }
  };
  useEffect(() => {
    fetchProjetos();
  }, []);

  const navigate = useNavigate();

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
        </div>
      </div>
    </div>
  );
}
