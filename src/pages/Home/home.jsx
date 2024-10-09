import React from 'react';
import './home.css'
import SideBar from '../../components/sidebar/sidebar';
import BarraDeBusca from '../../components/barra-de-busca/barra-busca';
import CardPerfil from '../../components/card-perfil/perfil';



function Home() {

  return (
    <div className="App">
      <SideBar />
      <div>
        <BarraDeBusca />
        <CardPerfil />
      </div>
    </div>
  );
}

export default Home;

