import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './home.css'
import SideBar from '../../components/sidebar/sidebar';
import BarraDeBusca from '../../components/barra-de-busca/barra-busca';

const API_BASE_URL = 'http://localhost:8080/usuario';



const Home = () => {
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');

  const userId = localStorage.getItem('userId');

  const fetchUserName = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/usuario/buscar/${userId}`);
      setUserName(response.data.nome);
    } catch (error) {
      console.error("Erro ao buscar nome do usuário:", error);
      setError("Erro ao buscar nome do usuário");
    }
  };

  useEffect(() => {
    fetchUserName();
  }, []);

  return (
    <div className="App">
      <BarraDeBusca />
      <SideBar CorFundo={true} />
      <div className="Conteudo">
        <div>
          <h1>Bem-vindo,{userName ? userName : "usuário"}!</h1>
          <p>Esta é sua página inicial.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

