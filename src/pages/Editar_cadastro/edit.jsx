import React from 'react';
import './styles/edit.css';
import profileImage from './assets/Frame.png';
import { useState } from 'react'; // Adicionando a importação do useState
import SideBar from '../../components/sidebar/sidebar';
import BarraDeBusca from '../../components/barra-de-busca/barra-busca';



function App() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    cidade: '',
    pais: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer validações e enviar os dados para um backend
    console.log("Dados do usuário:", formData);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="App">
      <SideBar CorFundo={false} />
      <BarraDeBusca />
      <div className="Conteudo">
        <h2>Cadastro de Usuário</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                placeholder="sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="cidade"
                name="cidade"
                placeholder="cidade"
                value={formData.cidade}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="estado"
                name="estado"
                placeholder="estado"
                value={formData.estado}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="pais"
                name="pais"
                placeholder="pais"
                value={formData.pais}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn-submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;

