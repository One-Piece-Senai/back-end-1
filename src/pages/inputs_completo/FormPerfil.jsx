import React from 'react';
import './FormPerfil.css';
import SideBar from '../../components/sidebar/sidebar';
import BarraDeBusca from '../../components/barra-de-busca/barra-busca';

function ProfileForm() {
  return (
    <div className="App" style={{ display: 'flex' }}>
    <SideBar />
    <div style={{ flex: 1 }}>
      <BarraDeBusca />
    <div className="perfil-form">
      <div className="foto-perfil">
      </div>
      <h2>Informações pessoais</h2>
      <div className="secao-form">
        <div className="grupo-form">
          <label>Nome</label>
          <input type="text" placeholder="Digite seu nome" />
        </div>
        <div className="grupo-form">
          <label>Sobrenome</label>
          <input type="text" placeholder="Digite seu sobrenome" />
        </div>
        <div className="grupo-form">
          <label>Sexo</label>
          <input type="text" placeholder="Digite seu sexo" />
        </div>
        <div className="grupo-form">
          <label>Data de Nascimento</label>
          <input type="date" />
        </div>
      </div>

      <h2>Contato profissional</h2>
      <div className="secao-form">
        <div className="grupo-form">
          <label>Telefone de contato</label>
          <input type="tel" placeholder="Digite seu telefone" />
        </div>
        <div className="grupo-form">
          <label>Email</label>
          <input type="email" placeholder="Digite seu email" />
        </div>
        <div className="grupo-form">
          <label>Especialidade</label>
          <input type="text" placeholder="Digite sua especialidade" />
        </div>
        <button className="add-especialidade">Adicionar uma especialidade</button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default ProfileForm;
