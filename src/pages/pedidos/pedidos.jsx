import SideBar from "../../components/sidebar/sidebar";
import BarraDeBusca from "../../components/barra-de-busca/barra-busca";
import { ContainerPerfil } from "../../components/card-perfil/style-perfil";
import Cardprojetista from "../../components/Card_projetista/card_projetista";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Para navegar para outra rota
import Tabela from "../../components/card-perfil/Tabela";
const API_BASE_URL = "http://localhost:8080/projetos/cliente/";

function Pedidos() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    fetchProjetos();
  }, []);

  const userId = localStorage.getItem("userId");

  const fetchProjetos = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}${userId}`);
      setProjetos(response.data);
    } catch (error) {
      console.error("Error fetching projetos:", error);
    }
  };

  const [vetor, setVetor] = useState([]);

  const fetchVetor = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/projetos/listar`);
      setVetor(response.data);
    } catch (error) {
      console.error("Error fetching projetos:", error);
    }
  };
  useEffect(() => {
    fetchVetor();
  }, []);

  const navigate = useNavigate(); // Hook para navegar entre rotas

  const handleCadastrarClick = () => {
    navigate("/cadastrar_Projeto"); // substitua "/cadastrar" pela rota desejada
  };

  const selecionar = (indice) => {
    console.log("Selecionado índice: ", vetor.id);
    navigate(`/detalhes/${indice}`); // Navega para a rota de detalhes passando o índice
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="box-branco">
          <ContainerPerfil style={{ borderRadius: "10px" }}>
          <input
              type="button"
              value="Cadastrar"
              className="botao_novo"
              onClick={handleCadastrarClick}
            />
            <h3>Lista de Projetos</h3>
                <Tabela vetor={projetos} selecionar={selecionar}/>           
          </ContainerPerfil>
        </div>
      </div>
    </div>
  );
}

export default Pedidos;
