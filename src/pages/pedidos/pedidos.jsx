import SideBar from '../../components/sidebar/sidebar';
import BarraDeBusca from '../../components/barra-de-busca/barra-busca';
import CardPerfil from '../../components/card-perfil/perfil';
import { ContainerPerfil } from "../../components/card-perfil/style-perfil";
import Cardprojetista from '../../components/Card_projetista/card_projetista';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/projetos/cliente/';


function Pedidos() {
  const [projetos, setProjetos] = useState([]);
  const [projetoForm, setProjetoForm] = useState({
    descricao: '',
    largura: '',
    altura: '',
    comprimento: '',
    material: '',
    statusprojeto: '',
    followup: '',
    dataFinalizacao: '',
    imagem: '',
    usuario: { id: '' },
  });
  const [editProjetoId, setEditProjetoId] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchProjetos();
  }, []);

  const userId = localStorage.getItem('userId');

  const fetchProjetos = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}${userId}`);
      setProjetos(response.data);
    } catch (error) {
      console.error('Error fetching projetos:', error);
    }
  };

  return (
    <div className="App" style={{ display: 'flex' }}>
    <SideBar />
    <div style={{ flex: 1 }}>
      <BarraDeBusca />
      <div className="box-branco">
      <ContainerPerfil style={{ borderRadius: "10px" }}>
      <h3>Lista de Projetos</h3>
      <ul>
        {projetos.map((projeto) => (
          <li key={projeto.id}>
            <p>{projeto.descricao} - {projeto.material} - {projeto.dataFinalizacao} {projeto.statusprojeto}</p>
            <button onClick={() => EntregaProjeto(projeto.id)}>Finalizar Projeto</button>
          </li>
        ))}
      </ul>
        </ContainerPerfil>
      </div>
    </div>
    </div>

  );
}

export default Pedidos;

