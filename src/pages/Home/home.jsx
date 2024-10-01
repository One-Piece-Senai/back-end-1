import React from 'react';
import './home.css'
import SideBar from '../../components/sidebar/sidebar';

import { useState } from 'react'; // Adicionando a importação do useState
import BarraDeBusca from '../../components/barra-de-busca/barra-busca';
import CardPerfil from '../../components/card-perfil/perfil';



function Home() {

  const [currentXP, setCurrentXP] = useState(0);
  const maxXP = 100;

  const increaseXP = () => {
    if (currentXP < maxXP) {
      setCurrentXP(currentXP + 10); // Aumenta o XP em 10
    }
  };

  const progressPercentage = (currentXP / maxXP) * 100;

  return (
    <div className="App">
      <SideBar />
      <div>
        <BarraDeBusca />
        <CardPerfil />
      </div>


      {/* 
      <div className="main-content">

        <div className='Conteudo'>
          <div className="card">
            <div className="card-content">
              <img src={profileImage} alt="Perfil" className="profile-image-card" />
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progressPercentage}%` }}>
                </div>

                <p id="xpText">XP:{currentXP}/{maxXP}</p>
              </div>
            </div>
            <div className="button-edit">
              <button onClick={increaseXP}>Gain XP</button>
              <a href="/edit">Editar cadastro</a>
            </div>
          </div>
          <div className="card">
            <h3>Bio</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam, est, velit distinctio consequatur architecto quas fugiat obcaecati quidem nam ut. Deleniti esse numquam perferendis itaque, consequatur veritatis accusantium quae!</p>
          </div>
          <div className="mini-card">
            teste
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;

