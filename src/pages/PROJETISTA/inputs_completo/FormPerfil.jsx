
import React from "react";
import "./FormPerfil.css";
import SideBarProjetista from "../../../components/sidebar_projetista/sidebar_projetista";
import BarraDeBusca from "../../../components/barra-de-busca/barra-busca";

function ProfileForm() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBarProjetista />
      <div style={{ flex: 1 }}>
        <BarraDeBusca />
        <div className="perfil-form">
          <h2>Informações pessoais</h2>
          <div className="secao-form">
            <div className="grupo-form">
              <label>Nome completo:</label>
              <input type="text" placeholder="Digite seu nome" />
            </div>
            <div className="grupo-form">
              <label>Carregar foto:</label>
              <button className="carregar-foto">
                <span role="img" aria-label="upload">📤</span> Upload
              </button>
            </div>
          </div>

          <h2>Informação profissional:</h2>
          <div className="secao-form">
            <div className="grupo-form">
              <label>Telefone de contato:</label>
              <input type="tel" placeholder="Digite seu contato" />
            </div>
            <div className="grupo-form">
              <label>E-mail:</label>
              <input type="email" placeholder="Digite seu e-mail" />
            </div>
          </div>
          <div className="grupo-form">
            <label>Descrição do perfil:</label>
            <textarea
              maxLength={1000}
              placeholder="Adicione uma descrição ao perfil:"
              rows="4"
            ></textarea>
          </div>
          <button className="salvar-perfil">Salvar</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;

