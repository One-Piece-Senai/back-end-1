import { ContainerPerfil } from "./style-perfil";
import SideBarProjetista from "../../components/sidebar_projetista/sidebar_projetista";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Para navegar para outra rota
import Tabela from "./Tabela";
import SideBar from "../../components/sidebar/sidebar";
import BarraDeBusca from "../../components/barra-de-busca/barra-busca";
import axios from "axios";

export default function CardPerfil() {
  const [vetor, setVetor] = useState([]);

  const fetchProjetos = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/projetos/listar`);
      setVetor(response.data);
    } catch (error) {
      console.error("Error fetching projetos:", error);
    }
  };
  useEffect(() => {
    fetchProjetos();
  }, []);

  const navigate = useNavigate(); // Hook para navegar entre rotas

  const selecionar = (indice) => {
    console.log("Selecionado índice: ", vetor.id);
    navigate(`/detalhes/${indice}`); // Navega para a rota de detalhes passando o índice
  };

  const handleCadastrarClick = () => {
    navigate("/cadastrar_Projeto"); // substitua "/cadastrar" pela rota desejada
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBarProjetista />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
          {/* Lista de projetos */}
          <ContainerPerfil style={{ borderRadius: "10px", marginTop: "20px" }}>
            <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
            <div>
              <Tabela vetor={vetor} selecionar={selecionar} />
            </div>
            </div>

          </ContainerPerfil>

        </div>
      </div>
    </div>
  );
}
